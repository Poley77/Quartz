# The Basics of Risk Adjustment

**Summary**: Why risk adjustment exists, how it works across Medicare Advantage, the ACA Marketplaces, and Medicaid managed care, the different methodological approaches, and the core policy tensions the system is designed to resolve.

**Sources**: Commonwealth Fund, ["The Basics of Risk Adjustment"](https://www.commonwealthfund.org/publications/explainer/2024/apr/basics-risk-adjustment) (April 2024)

**Last updated**: 2026-06-23

---

## The Problem Risk Adjustment Solves

Insurance markets have a structural vulnerability: **adverse selection**. If insurers are free to price plans based on individual health status, sick people face unaffordable premiums or outright denial of coverage. If insurers are required to accept all comers at the same premium (community rating), they have a powerful incentive to attract healthy enrollees and avoid sick ones — because healthy members are profitable and sick members are not.

Risk adjustment is the mechanism regulators use to break this incentive. Rather than letting plans profit by attracting healthy members, risk adjustment transfers money from plans with healthier-than-average enrollees to plans with sicker-than-average enrollees. Done well, it makes enrollee health status financially neutral — removing the reward for cherry-picking and the penalty for serving complex patients.

This is the foundational logic behind risk adjustment in every market where it operates: **ACA Marketplaces**, **Medicare Advantage**, and **Medicaid managed care**.

## How It Works: The Basic Mechanism

Risk adjustment systems share a common architecture:

1. **Risk scoring**: Each enrollee is assigned a risk score based on their demographics and diagnosis history. Higher scores mean more predicted cost.
2. **Plan-level risk**: Each plan's average risk score is calculated across its enrolled population.
3. **Transfer payments**: Plans with above-average risk scores receive additional payments. Plans with below-average risk scores make payments. The money circulates within the risk pool — it is not a federal subsidy.
4. **Result**: Plans serving sicker populations are compensated for the higher expected costs of that population. Plans serving healthier populations pay into the pool proportionate to their favorable selection.

The key insight: **the goal is not to predict any individual patient's costs accurately — it's to fairly compensate plans for systematic differences in the health burden of their enrolled populations.**

**Example** (base monthly payment: $1,000):

| | 85-year-old male | 65-year-old female |
|---|---|---|
| **Base demographic score** | 0.686 | 0.323 |
| Condition scores | Diabetes: +0.302 | Rheumatoid arthritis: +0.421 |
| | Colorectal cancer: +0.307 | Dementia: +0.346 |
| | | Chronic kidney disease: +0.069 |
| **Total risk score** | **1.295** | **1.159** |
| **Monthly payment** | **$1,295** | **$1,159** |

The base score reflects age, sex, and disability status — older and disabled patients start higher. Each condition adds a weight on top. A frail 85-year-old male with diabetes and colorectal cancer generates a risk score nearly 30% above the base rate; a 65-year-old female with three serious chronic conditions generates one 16% above it.

## Risk Adjustment Across Insurance Markets

### Medicare Advantage

The most extensively studied and financially significant risk adjustment program. CMS pays MA plans a capitated per-member-per-month rate that is multiplied by each enrollee's [[hcc-coding-intro|RAF score]] — a risk score derived from demographic factors and [[hcc-coding-intro|HCC coding]].

MA risk adjustment is **prospective**: risk scores from the current year (based on diagnoses submitted in the prior year) determine payments in the next year. This creates a one-year lag. It also creates intense financial incentives for plans to maximize diagnosis coding — ensuring every HCC for every enrollee is captured annually.

CMS distributed over $140 billion in MA risk-adjusted payments in 2023. See [[how-risk-adjustment-affects-payment-medicare-advantage-plans]] for the payment mechanics and the ongoing overpayment debate.

### ACA Marketplaces

The ACA created a permanent risk adjustment program for the individual and small group markets. Unlike MA, it is **budget-neutral within each state and market**: money flows from plans with healthier enrollees to plans with sicker enrollees, with no net federal expenditure.

**How ACA risk adjustment differs from MA:**
- CMS calculates a **Statewide Average Premium** and uses it as the reference point for transfers
- Risk scores are based on diagnosis data and demographic factors, similar to MA but using a different HHS-developed model (HHS-HCC rather than CMS-HCC)
- Plans that enroll healthier members owe money into the risk pool; plans with sicker members receive transfers
- The program is designed to neutralize the incentive for plans to design benefits that attract only healthy enrollees

**Practical significance**: ACA risk adjustment has materially supported market stability by allowing plans to serve sicker populations without being competitively penalized. It is one reason the individual market, which was predicted to experience adverse selection death spirals, has remained functional.

### Medicaid Managed Care

Most Medicaid beneficiaries are enrolled in managed care organizations (MCOs) that receive capitated payments from states. States are increasingly required to apply risk adjustment to these capitated payments — particularly for high-cost populations such as:
- Dual-eligibles (those with both Medicare and Medicaid)
- Children with special healthcare needs
- Individuals with serious mental illness or substance use disorders
- Long-term services and supports populations

Medicaid risk adjustment is less standardized than MA or ACA risk adjustment — states have significant flexibility in how they design their capitation methodologies. The CMS-HCC model used in MA is often adapted or replaced with state-specific tools.

## Approaches to Risk Scoring

Risk adjustment models differ in *when* they measure health status relative to the payment period:

| Approach | Timing | Strengths | Limitations |
|---|---|---|---|
| **Prospective** | Prior-year diagnoses predict current-year costs | Simple to administer; widely used | Misses new diagnoses; one-year lag |
| **Concurrent** | Current-year diagnoses and current-year costs matched | More accurate | Requires real-time data; harder to operationalize |
| **Retrospective** | Actual costs known; adjust payments after the fact | Eliminates prediction error | Creates retroactive financial uncertainty; less incentive for efficiency |

Most real-world systems use **prospective** risk adjustment for simplicity and operational feasibility, accepting the lag as a necessary tradeoff.

### Diagnosis-Based vs. Cost-Based Models

**Diagnosis-based models** (like CMS-HCC) use diagnosis codes to predict expected costs. They are portable across data systems but depend entirely on coding accuracy and completeness.

**Cost-based models** use actual prior spending. Simpler in concept, but they risk rewarding high-cost, inefficient care — a plan that delivers expensive care in year one generates a higher risk score in year two, creating perverse incentives.

Most modern risk adjustment systems use diagnosis-based models for this reason.

## The Coding Intensity Problem

Diagnosis-based risk adjustment creates a systemic tension. Plans and providers have strong financial incentives to ensure all diagnoses are captured and coded accurately. But the line between:
- **Appropriate coding improvement** (accurately documenting real conditions)
- **Upcoding** (submitting codes for conditions not clinically supported, or inflating severity)

...is frequently tested. In MA, this has produced the "coding intensity" problem: MA plans systematically code more conditions per patient than traditional Medicare — not entirely because their patients are sicker, but because they invest heavily in coding optimization programs (chart reviews, in-home assessments) that traditional Medicare does not.

CMS's responses have included:
- A **coding intensity adjustment** applied to all MA risk scores (a system-wide discount)
- The **V28 model transition**, which recalibrated HCC weights to better reflect actual costs
- Expanded **RADV auditing** (see [[hcc-coding-radv-audits]]) to validate submitted codes against clinical records

## Risk Adjustment and Health Equity

A growing concern in risk adjustment policy: the standard demographic and diagnosis-based models may systematically underestimate the care needs of low-income and disadvantaged populations.

**The mechanism**: Patients who lack access to care have fewer recorded diagnoses — not because they are healthier, but because they see fewer providers. A homeless individual with unmanaged diabetes may generate fewer diagnosis codes than a higher-income patient receiving regular care for the same condition. Under a diagnosis-based risk model, the homeless patient would receive a lower risk score — and plans serving disadvantaged populations would be systematically underpaid.

**Policy responses**:
- The CMS-HCC **V28 model** added social determinants of health (Z codes) as risk factors for the first time
- Some states are incorporating **social risk factors** (housing instability, food insecurity) into Medicaid capitation methodologies
- HHS has signaled ongoing interest in equity adjustments for ACA Marketplace risk adjustment

The tension is real: adding social risk factors better compensates plans for disadvantaged populations, but also creates incentives to document social needs without necessarily addressing them.

## Limitations of Risk Adjustment

No risk adjustment system fully solves adverse selection. Residual limitations include:

**Incomplete models**: Even the best diagnosis-based models explain only 10–15% of individual-level cost variation. Plans with disproportionate shares of very-high-cost outliers (transplant patients, rare disease patients) may still be underpaid after risk adjustment.

**Selection on unmeasured dimensions**: Plans can still attract healthier members by designing benefits (narrow networks, copay structures, pharmacy formularies) that are appealing to healthy people and unappealing to the sick — without technically discriminating by diagnosis.

**Gaming and moral hazard**: Intensive coding programs shift money toward plans that invest in coding operations, not necessarily toward plans that provide better care. The system rewards documentation of illness, not improvement of health.

**Data lag**: Prospective models use prior-year data. A patient newly diagnosed with a serious condition generates no HCC revenue in the year of diagnosis — only in subsequent years.

These limitations are well-understood and inform ongoing model development at CMS and state levels. The goal is a system that is good enough to neutralize the worst selection incentives, not one that achieves perfect actuarial precision.

## Why It Matters for VBC

Risk adjustment is the financial prerequisite for [[value-based-care|value-based care]] at scale. Without it:
- Capitated models would reward enrolling healthy patients over serving complex ones
- ACOs and MA plans would face adverse selection death spirals as sicker patients concentrate in certain organizations
- The shift from FFS to capitated payment would simply relocate the financial incentive — from volume to selection

Getting risk adjustment right is therefore not a technical footnote to VBC policy. It is the mechanism that makes capitated, outcomes-oriented payment models viable.

## Related Pages

- [[hcc-coding-intro]]
- [[hcc-coding-radv-audits]]
- [[risk-adjustment-coding]]
- [[how-risk-adjustment-affects-payment-medicare-advantage-plans]]
- [[taking-stock-medicare-advantage-payment]]
- [[value-based-care]]
- [[medicare-advantage-policy-primer]]
- [[affordable-care-act]]
