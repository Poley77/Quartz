// Wiki AI Chat Widget
// Set this to your Cloudflare Worker URL after deploying wiki-ai-chat worker
const WORKER_URL = 'https://wispy-darkness-1e54.poley7.workers.dev/';

(function () {
  const css = `
#wiki-chat-btn {
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 9000;
  background: var(--secondary, #284b63);
  color: #fff;
  border: none;
  border-radius: 28px;
  padding: 12px 20px;
  font-size: 14px;
  font-family: inherit;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.18);
  transition: background 0.2s;
}
#wiki-chat-btn:hover { background: var(--tertiary, #84a59d); }
#wiki-chat-btn svg { flex-shrink: 0; }

#wiki-chat-panel {
  position: fixed;
  bottom: 80px;
  right: 24px;
  z-index: 9000;
  width: 380px;
  max-width: calc(100vw - 48px);
  height: 480px;
  max-height: calc(100vh - 120px);
  background: var(--light, #faf8f8);
  border: 1px solid var(--lightgray, #e5e5e5);
  border-radius: 14px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.15);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  font-family: inherit;
}
#wiki-chat-panel[hidden] { display: none; }

#wiki-chat-header {
  padding: 14px 16px;
  background: var(--secondary, #284b63);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  font-weight: 600;
}
#wiki-chat-close {
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 20px;
  line-height: 1;
  padding: 0;
  opacity: 0.8;
}
#wiki-chat-close:hover { opacity: 1; }

#wiki-chat-messages {
  flex: 1;
  overflow-y: auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.wiki-msg {
  max-width: 86%;
  padding: 10px 13px;
  border-radius: 10px;
  font-size: 13.5px;
  line-height: 1.5;
  white-space: pre-wrap;
  word-break: break-word;
}
.wiki-msg-user {
  align-self: flex-end;
  background: var(--secondary, #284b63);
  color: #fff;
  border-bottom-right-radius: 3px;
}
.wiki-msg-bot {
  align-self: flex-start;
  background: var(--lightgray, #e5e5e5);
  color: var(--dark, #2b2b2b);
  border-bottom-left-radius: 3px;
}
.wiki-msg-bot.thinking { opacity: 0.6; font-style: italic; }

#wiki-chat-input-row {
  display: flex;
  padding: 12px;
  border-top: 1px solid var(--lightgray, #e5e5e5);
  gap: 8px;
}
#wiki-chat-input {
  flex: 1;
  padding: 9px 12px;
  border: 1px solid var(--lightgray, #e5e5e5);
  border-radius: 8px;
  font-size: 13.5px;
  font-family: inherit;
  background: var(--light, #faf8f8);
  color: var(--dark, #2b2b2b);
  outline: none;
}
#wiki-chat-input:focus { border-color: var(--secondary, #284b63); }
#wiki-chat-send {
  padding: 9px 14px;
  background: var(--secondary, #284b63);
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  transition: background 0.2s;
}
#wiki-chat-send:hover { background: var(--tertiary, #84a59d); }
#wiki-chat-send:disabled { opacity: 0.5; cursor: not-allowed; }
  `;

  const style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  const btn = document.createElement('button');
  btn.id = 'wiki-chat-btn';
  btn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg> Ask the Wiki`;
  document.body.appendChild(btn);

  const panel = document.createElement('div');
  panel.id = 'wiki-chat-panel';
  panel.hidden = true;
  panel.innerHTML = `
    <div id="wiki-chat-header">
      <span>Ask the Wiki</span>
      <button id="wiki-chat-close" aria-label="Close">&#x2715;</button>
    </div>
    <div id="wiki-chat-messages">
      <div class="wiki-msg wiki-msg-bot">Hi! Ask me anything about the US healthcare system — I'll answer using this wiki.</div>
    </div>
    <div id="wiki-chat-input-row">
      <input id="wiki-chat-input" type="text" placeholder="e.g. How do ACO shared savings work?">
      <button id="wiki-chat-send" aria-label="Send">&#x2192;</button>
    </div>
  `;
  document.body.appendChild(panel);

  const closeBtn = panel.querySelector('#wiki-chat-close');
  const input = panel.querySelector('#wiki-chat-input');
  const sendBtn = panel.querySelector('#wiki-chat-send');
  const messages = panel.querySelector('#wiki-chat-messages');

  btn.addEventListener('click', () => { panel.hidden = false; input.focus(); });
  closeBtn.addEventListener('click', () => { panel.hidden = true; });

  function appendMessage(role, text, thinking = false) {
    const el = document.createElement('div');
    el.className = 'wiki-msg wiki-msg-' + role + (thinking ? ' thinking' : '');
    el.textContent = text;
    messages.appendChild(el);
    messages.scrollTop = messages.scrollHeight;
    return el;
  }

  async function sendMessage() {
    const question = input.value.trim();
    if (!question || sendBtn.disabled) return;

    input.value = '';
    sendBtn.disabled = true;
    appendMessage('user', question);
    const thinkingEl = appendMessage('bot', 'Thinking…', true);

    try {
      const res = await fetch(WORKER_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question }),
      });
      const data = await res.json();
      thinkingEl.classList.remove('thinking');
      thinkingEl.textContent = data.answer || data.error || 'No response received.';
    } catch {
      thinkingEl.classList.remove('thinking');
      thinkingEl.textContent = 'Could not connect to the wiki AI. Please try again.';
    } finally {
      sendBtn.disabled = false;
      input.focus();
    }

    messages.scrollTop = messages.scrollHeight;
  }

  sendBtn.addEventListener('click', sendMessage);
  input.addEventListener('keydown', (e) => { if (e.key === 'Enter') sendMessage(); });
})();
