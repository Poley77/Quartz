# The Math of ACOs

**Summary**: How Accountable Care Organizations generate (or fail to generate) financial savings — the mechanics of benchmarks, shared savings calculations, and why the numbers are harder than they look.

**Sources**: McKinsey & Company, "The Math of ACOs"

**Last updated**: 2026-06-22

---

## How ACOs Are Supposed to Save Money

An ACO's financial logic is straightforward in theory: CMS sets a **spending benchmark** based on the ACO's historical costs (adjusted for patient risk). If the ACO's actual spending on its attributed population comes in below that benchmark, CMS and the ACO split the difference. The ACO has a direct financial incentive to keep patients healthy and reduce unnecessary utilization.

The savings mechanism works through three main levers:

**Reducing preventable hospitalizations**: Hospital admissions are the single largest cost driver in Medicare. Proactive chronic disease management — better medication adherence, timely follow-up after discharge, care coordination across providers — can meaningfully reduce admission rates for high-risk patients. One preventable hospitalization avoided can be worth $15,000–$30,000 against the benchmark.

**Reducing low-value care**: Unnecessary tests, procedures, and specialist referrals that don't improve outcomes. This is harder to operationalize because it requires changing physician behavior and is politically difficult inside health systems where specialists earn FFS revenue.

**Improving care transitions**: Readmissions within 30 days of discharge are both costly and often preventable. Strong post-discharge follow-up (phone calls, home visits, medication reconciliation) is one of the highest-ROI interventions available.

## A Worked Example

Suppose an ACO has 10,000 attributed Medicare beneficiaries. CMS sets a risk-adjusted benchmark of **$12,000 per beneficiary per year** — a total benchmark of $120 million.

The ACO invests in care management: two full-time nurse care coordinators ($200K/year combined), a population health analytics platform ($150K/year), and enhanced primary care coordination. Total investment: ~$500K annually.

Through better chronic disease management and reduced readmissions, actual spending comes in at **$11,400 per beneficiary** — $114 million total, or **$6 million below benchmark**.

Under MSSP rules, the ACO and CMS **split the savings 50/50**: the ACO earns a $3 million shared savings payment against a $500K investment — a 6:1 return.

**The catch**: At higher risk tracks (two-sided), if spending had come in $6 million *above* benchmark, the ACO would owe CMS $3 million. This is why most ACOs start in upside-only tracks before taking on downside risk.

## 2024 MSSP Results: The Program at Scale

For performance year 2024:
- **476 ACOs** participated in MSSP
- **14.3 million beneficiaries** attributed
- **$2.4–2.5 billion** in net Medicare savings generated — the largest in program history
- ACOs earned **$4.1 billion** in shared savings performance payments (also a record)

The program is generating meaningful savings at scale, though performance is uneven across ACOs.

## Where the Math Gets Hard

Despite the clean theory, ACO financial performance has been mixed. Several structural challenges complicate the numbers:

**The benchmark problem**: CMS sets benchmarks based on historical spending. ACOs in high-spending markets have higher benchmarks to beat, but also more room to cut. ACOs in already-efficient markets start at lower baselines and find it much harder to generate savings — the so-called "efficiency penalty." A physician practice in rural Iowa that has always practiced lean medicine has little room to beat the benchmark even if care quality is excellent.

**Attribution**: Patients are attributed to ACOs based on where they receive the plurality of their primary care visits. But patients don't know they're in an ACO, don't have to use ACO providers, and can see any Medicare physician they want. This makes population management difficult — an ACO can invest in a patient's care management only to have them hospitalized at a non-ACO facility, generating costs that count against the ACO's benchmark with no visibility to intervene.

**The transition cost problem**: Building the care management infrastructure — data analytics, care coordinators, patient outreach programs — requires upfront investment. These costs come before any savings materialize. For a 5,000-patient ACO, the infrastructure investment can be $300K–600K before a single dollar of shared savings is earned.

**Risk adjustment**: ACO benchmarks are adjusted for patient risk using HCC codes. If an ACO's population is sicker than the coding reflects, the benchmark won't adequately compensate. Closing coding gaps (accurately documenting all chronic conditions) can be worth hundreds of dollars per member per year — which is why [[risk-adjustment-coding|coding accuracy]] is both a financial imperative and a compliance area that CMS watches closely.

**Specialist alignment**: ACOs have an incentive to reduce unnecessary specialist referrals and procedures. Specialist physicians are typically paid on FFS production — more referrals means more revenue for them. Aligning these interests requires compensation redesign that is politically difficult inside health systems.

## What Drives ACO Success

McKinsey analysis identifies a consistent set of characteristics in high-performing ACOs:

- **Strong primary care foundation**: PCPs who are engaged, high-volume users of care management programs, and data-driven in their approach to patient outreach. The ACO model is fundamentally built on primary care.
- **Real-time data infrastructure**: The ability to identify high-risk patients early and intervene before an acute event. Claims data lags 60–90 days — ACOs need clinical data streams to act in real time.
- **Physician leadership**: ACOs led by physicians (rather than hospital systems protecting FFS volume) tend to reduce utilization more aggressively. Hospital-owned ACOs face an inherent conflict of interest.
- **Scale**: Larger ACOs can absorb the infrastructure investment and have more statistical stability in their cost performance. Smaller ACOs can have performance swing dramatically based on a small number of high-cost patients.

## The Transition to LEAD

CMS announced in December 2025 that ACO REACH will conclude at the end of 2026. Its replacement — the **LEAD Model (Long-term Enhanced ACO Design)** — launches in 2027 as a 10-year program focused on high-needs patients and higher-cost providers. LEAD is designed to be more accessible to new entrants while retaining the equity focus and capitation flexibility of REACH.

## Related Pages

- [[value-based-care]]
- [[compare-aco-reach-mssp]]
- [[risk-adjustment-coding]]
- [[medicare]]
- [[the-strategy-that-will-fix-health-care]]
- [[inside-the-value-based-care-ecosystem]]
- [[vbc-under-pressure-five-insights-from-the-front-lines]]
