# How Risk Adjustment Affects Payment for Medicare Advantage Plans

**Summary**: How CMS uses HCC risk scores to set capitated payment rates for Medicare Advantage plans — and why this system is both essential and controversial.

**Sources**: Commonwealth Fund, "How Risk Adjustment Affects Payment for Medicare Advantage Plans" (January 2026)

**Last updated**: 2026-06-22

---

## The Basic Mechanism

[[Medicare|Medicare Advantage (MA)]] plans receive a **per-member per-month capitated payment** from CMS rather than fee-for-service reimbursement. CMS sets this payment based on two inputs:

1. **The county-level benchmark**: CMS estimates what traditional Medicare would cost to cover a beneficiary in that geographic area
2. **The plan's risk score**: A measure of how sick the plan's enrolled population is, calculated using [[risk-adjustment-coding|HCC coding]]

The formula: **Plan payment = Benchmark × Risk score × Bid adjustment**

Plans that enroll sicker patients (higher risk scores) receive more money. Plans that enroll healthier patients receive less. This is the intended design — to neutralize the incentive to cherry-pick healthy enrollees.

## Why Risk Adjustment Is Contested

The system works in theory. In practice, it has become one of the most contentious issues in Medicare policy.

**The overpayment problem**: Multiple analyses — including from MedPAC, the Government Accountability Office, and academic researchers — have found that Medicare Advantage plans are overpaid relative to what traditional Medicare would spend on the same beneficiaries. Estimates range from $600 to over $1,000 per enrollee per year in excess payments.

The mechanism: MA plans have strong financial incentives to **maximize risk scores** by coding every possible HCC for every enrollee. They invest heavily in chart reviews, in-home health assessments, and coding optimization programs. Traditional Medicare, by contrast, only codes what appears in claims — a passive process that systematically produces lower risk scores.

**The favorable selection concern**: Despite risk adjustment, MA plans may still be enrolling healthier-than-average Medicare beneficiaries. If the risk adjustment model doesn't fully account for the health differences between MA and traditional Medicare populations, plans receive overpayment even after adjustment.

## CMS Responses

CMS has taken several steps to address overpayment concerns:

**V28 model transition**: CMS is transitioning from the older V24 HCC model to the updated V28 model, which recalibrates condition weights to better reflect actual cost patterns. This reduces risk scores for many plans and is projected to reduce payments.

**RADV audits**: CMS has ramped up Risk Adjustment Data Validation (RADV) audits, which review medical records to verify that submitted HCC codes are supported by clinical documentation. Plans with inflated scores face payment recovery.

**Coding intensity adjustment**: CMS applies a blanket adjustment to MA risk scores to account for the coding intensity difference between MA and FFS Medicare — essentially discounting MA risk scores system-wide.

## Why It Matters for VBC

Risk adjustment is the financial foundation of capitated [[value-based-care]] in Medicare. Get it right, and providers are paid appropriately for their patient mix — with strong incentives to keep those patients healthy. Get it wrong, and either:

- Providers are underpaid for sick patients and avoid them (adverse selection in reverse)
- Providers are overpaid for healthy patients and have no incentive to improve care (gaming)

The political and policy stakes are high: MA enrollment has grown to roughly half of all Medicare beneficiaries, making the accuracy of risk adjustment a multi-hundred-billion-dollar question for federal spending.

## Related Pages

- [[risk-adjustment-coding]]
- [[medicare]]
- [[taking-stock-medicare-advantage-payment]]
- [[medicare-advantage-policy-primer]]
- [[value-based-care]]
- [[6-insights-on-the-new-ma-reality]]
