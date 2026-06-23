# Taking Stock of Medicare Advantage Payment

**Summary**: An assessment of whether Medicare Advantage plans are paid fairly — the evidence on overpayments, benchmarks, and the ongoing reform debate.

**Sources**: Commonwealth Fund, "Taking Stock of Medicare Advantage Payment" (2022)

**Last updated**: 2026-06-22

---

## The Central Question

[[Medicare|Medicare Advantage (MA)]] plans are paid through a capitated system in which CMS sets county-level benchmarks and adjusts payments based on each plan's enrolled population risk. The question that has dogged the program for years: are MA plans paid the right amount?

The short answer from researchers, MedPAC, and the GAO: probably not. MA plans appear to be systematically overpaid relative to what traditional Medicare would spend on the same beneficiaries.

## What the Evidence Shows

**MedPAC's estimates**: The Medicare Payment Advisory Commission has consistently found that Medicare spends more per beneficiary in MA than it would if those same people were in traditional Medicare. Their estimates have ranged from **$600 to over $1,000 per enrollee per year** in excess payments — representing tens of billions of dollars annually across the full MA population.

With 34.4 million beneficiaries enrolled in MA in 2025, even a conservative estimate of $600/enrollee implies **over $20 billion per year** in overpayment relative to Traditional Medicare.

**The benchmark structure**: CMS sets MA benchmarks at a percentage of traditional Medicare spending in each county — ranging from 95% to 115% depending on the county's historical cost level. Counties with lower traditional Medicare spending get **higher benchmarks** (an explicit subsidy to encourage MA participation in underserved areas). The result is that some plans can earn profits simply by being geographically well-positioned, rather than by delivering efficient care.

**Coding intensity**: MA plans invest heavily in [[risk-adjustment-coding|HCC coding optimization]] — in-home assessments, chart reviews, retrospective coding programs. This systematically inflates risk scores relative to traditional Medicare, where coding only reflects what appears in claims. CMS applies a coding intensity adjustment to account for this, but researchers debate whether it fully corrects for the gap. Studies suggest the adjustment covers roughly **half the actual coding difference**.

**Favorable selection**: Despite risk adjustment, MA plans may still be enrolling healthier-than-average Medicare beneficiaries. Beneficiaries who switch from traditional Medicare to MA tend to be healthier than those who stay — a selection pattern that risk adjustment doesn't fully correct.

## The V28 Model Transition

CMS is transitioning from the older V24 HCC model to the updated **V28 model**, which recalibrates condition weights to better reflect actual cost patterns. The transition is phased over 2024–2026:

- 33% V28 weighting in 2024
- 67% V28 weighting in 2025
- 100% V28 weighting in 2026

The V28 model reduces risk scores for many conditions — particularly behavioral health codes and some chronic disease combinations — and is projected to meaningfully reduce payments for plans with high concentrations of these codes. Plans with large populations of dually eligible beneficiaries and rural populations are disproportionately affected.

## RADV Audits

CMS has ramped up **Risk Adjustment Data Validation (RADV)** audits, which review medical records to verify that submitted HCC codes are supported by clinical documentation.

In 2023, CMS finalized a new RADV methodology after years of litigation and delay. Plans with inflated scores face retroactive payment recovery. The change creates significant uncertainty for MA plans around prior-year revenue and has prompted plans to be more conservative about retrospective coding programs.

The shift favors plans with **prospective coding** — capturing accurate diagnoses at the point of care through clinical workflows — over those relying on retrospective chart reviews after the fact. This is one reason AI tools that support point-of-care [[risk-adjustment-coding|coding]] (like Navina's platform) have become strategically important in the MA market.

## The Reform Debate

There is bipartisan concern about MA overpayment, but the politics are complicated:

**The case for reform**: Federal spending on MA is projected to grow substantially as enrollment increases. If plans are overpaid, reducing payments would save money without reducing benefits — in theory. MedPAC has repeatedly recommended tightening benchmarks and improving coding intensity adjustments.

**The resistance to reform**: MA plans use their higher-than-FFS payment to fund supplemental benefits (dental, vision, hearing, transportation) that beneficiaries value. Cutting MA rates pressures plans to reduce these benefits or exit markets. With ~55% of Medicare beneficiaries now in MA, this is politically very sensitive — cutting MA benefits affects more voters than any other healthcare policy change.

**Plan response to rate pressure**: When CMS implemented rate-setting changes in 2023–2024 that reduced MA payment growth below plan expectations, the market responded sharply. Humana, CVS/Aetna, and UnitedHealth all reported significant MA profitability pressure. Several large plans exited markets, reduced supplemental benefits, or increased premiums. MA EBITDA margins fell sharply — roughly 72% of MA plans operated at negative EBITDA in 2024.

The 2026 rate environment is expected to begin a gradual recovery, with MA margins projected to improve 100–150 basis points. But the era of easy MA profit through coding intensity alone has ended. Plans that win going forward will do so through genuine clinical value — lower hospitalization rates, better chronic disease management, higher Star Ratings.

## Connection to the Broader VBC Debate

The MA overpayment debate illustrates a core tension in value-based care design: capitated models can reduce unnecessary utilization AND can be gamed through risk score inflation. Both are happening simultaneously.

The solution requires:
1. Accurate risk adjustment that doesn't reward coding inflation
2. Strong quality measurement that verifies health outcomes, not just diagnoses
3. Audit mechanisms with meaningful financial teeth

Getting this right matters enormously at scale. With $1+ trillion in annual MA spending by 2026, even a 5% overpayment represents $50 billion per year in federal spending that could otherwise fund coverage expansion, provider rate increases, or deficit reduction.

## Related Pages

- [[medicare]]
- [[medicare-advantage-policy-primer]]
- [[how-risk-adjustment-affects-payment-medicare-advantage-plans]]
- [[risk-adjustment-coding]]
- [[6-insights-on-the-new-ma-reality]]
- [[healthcare-costs]]
