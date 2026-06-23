#!/bin/bash
# Syncs Obsidian vault to Quartz content dir and pushes to GitHub.
# Run by launchd whenever the vault directory changes.

export PATH="/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin"
export HOME="/Users/richard.clayton"

VAULT="/Users/richard.clayton/Documents/LLM Wiki/Wiki"
QUARTZ="/Users/richard.clayton/quartz"
LOG="$QUARTZ/.quartz-cache/sync.log"

mkdir -p "$QUARTZ/.quartz-cache"

echo "--- $(date '+%Y-%m-%d %H:%M:%S') sync started ---" >> "$LOG"

rsync -a --delete --exclude='.obsidian/' --exclude='latest-news.md' "$VAULT/" "$QUARTZ/content/" >> "$LOG" 2>&1

cd "$QUARTZ"
/usr/bin/git add content/ >> "$LOG" 2>&1

if /usr/bin/git diff --staged --quiet; then
    echo "No changes." >> "$LOG"
    exit 0
fi

/usr/bin/git commit -m "Quartz sync: $(date '+%b %d, %Y, %I:%M %p')" >> "$LOG" 2>&1
/usr/bin/git pull --rebase origin v5 >> "$LOG" 2>&1
/usr/bin/git push origin v5 >> "$LOG" 2>&1

echo "--- sync done ---" >> "$LOG"
