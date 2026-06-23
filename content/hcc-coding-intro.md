# Introduction to HCC Coding

**Summary**: What Hierarchical Condition Categories are, how the RAF score is calculated, why the hierarchy and annual reset matter, and how HCCs connect to capitated payment in Medicare Advantage and value-based care.

**Sources**: RAAPID, ["Risk Adjustment Coding in 2026"](https://www.raapidinc.com/blogs/risk-adjustment-coding/); AAFP, ["Hierarchical Condition Category (HCC) Coding"](https://www.aafp.org/practice-operations/billing-and-coding/hierarchical-condition-category)

**Last updated**: 2026-06-23

---

## What Are HCCs?

Hierarchical Condition Categories (HCCs) are a classification system developed by CMS to group related ICD-10-CM diagnosis codes into clinically meaningful categories that predict future healthcare costs. CMS introduced the model in 2004; it has since become the financial foundation of Medicare Advantage and an expanding set of value-based payment arrangements.

The system contains approximately 86–90 HCC categories, aggregating over 74,000 individual ICD-10 diagnosis codes. Each category represents a group of conditions that share similar long-term cost patterns and resource intensity. The logic is that what matters for predicting a patient's future costs is not the specific code, but the underlying disease burden — and clinically related conditions should be grouped accordingly.

Common HCC examples:

| HCC | Category | Example diagnoses |
|---|---|---|
| HCC 18 | Diabetes with chronic complications | E11.22 (T2D with CKD), E11.40 (T2D with neuropathy) |
| HCC 85 | Congestive heart failure | I50.20 (unspecified systolic HF) |
| HCC 111 | COPD | J44.0, J44.1 |
| HCC 22 | Morbid obesity | E66.01 |
| HCC 59 | Major depressive disorder | F33.0–F33.2 |

## The "Hierarchical" Part

The hierarchy solves a double-counting problem. If a patient has both "diabetes" and "diabetes with kidney disease," treating them as two separate conditions would overstate their cost burden relative to a patient who only has uncomplicated diabetes.

CMS resolves this by organizing HCCs into disease hierarchies. Within each hierarchy, only the most severe (highest-weighted) condition counts — the more specific diagnosis absorbs the less specific one. A patient coded for diabetes with CKD (HCC 18) does not also get credit for uncomplicated diabetes, because the more severe category already subsumes it.

This makes **coding specificity** critically important. Vague documentation that maps to a lower-severity category within a hierarchy will produce a lower risk score — and lower payment — than documentation that accurately captures the complication or severity level.

## The RAF Score

Every patient covered under a risk-adjusted payment arrangement has a **Risk Adjustment Factor (RAF) score**. It has two components:

**1. Demographic score**: Calculated automatically from enrollment data based on age, sex, Medicare eligibility reason (aged vs. disabled), and Medicaid dual-eligibility status.

**2. Disease score**: The sum of the risk weights for each HCC that applies to the patient in the current year. Each HCC is assigned a weight that reflects how much more expensive — relative to an average beneficiary — patients with that condition are expected to be.

**RAF score = Demographic score + Sum of applicable HCC weights**

**Capitation payment = County benchmark × RAF score × Bid adjustment**

A RAF score of 1.0 represents the average expected cost of a Medicare beneficiary. A score of 1.5 means the plan or provider receives 50% more than the baseline. Patients with multiple serious comorbidities commonly reach scores of 2.5–4.0. CMS distributed $140 billion in MA risk-adjusted benchmarks in 2023, making accurate RAF calculation a multi-hundred-billion-dollar collective question.

**The impact of documentation specificity — a concrete example:**

| Patient | Conditions documented | RAF score |
|---|---|---|
| 68-year-old female | Type 2 diabetes (unspecified), hypertension, BMI 38.2 | **0.428** |
| Same patient, coded accurately | Diabetic polyneuropathy, morbid obesity, congestive heart failure | **1.327** |

The same patient, same clinical reality — but accurate specificity produces a RAF score three times higher, reflecting the true cost burden of managing her conditions. The difference is not gaming; it is accurate documentation of what is already being managed.

## The Annual Reset

RAF scores do not carry forward automatically. Every January 1st, all HCC codes reset to zero. For a condition to count toward the current year's RAF score, it must be documented in a face-to-face clinical encounter that takes place within that calendar year.

This annual recapture requirement is one of the most operationally significant aspects of HCC coding. A patient with stable, well-controlled Type 2 diabetes, COPD, and heart failure who does not have all three conditions explicitly documented and coded during a visit in the current year will have a RAF score that understates their true cost burden — and the plan or provider will be systematically underpaid for managing them.

Documentation gaps from missed annual recapture create revenue leakage averaging **$3,000 per member annually** for patients with missed conditions.

## CMS-HCC Model Versions

CMS periodically updates the HCC model to recalibrate condition weights based on more recent cost and utilization data:

| Model | Key changes |
|---|---|
| V21 | Long-running baseline; primary model through 2019 |
| V24 | Expanded behavioral health HCCs; became primary 2020 |
| V28 | Added social determinants and Z codes; recalibrated weights downward for many conditions; phased in 2024–2026 |

**A note on Z codes**: ICD-10-CM Z codes (categories Z55–Z65) capture social determinants of health — employment status, housing instability, food insecurity, educational barriers, and environmental factors. Under V28, CMS incorporated these into the HCC model for the first time, reflecting growing recognition that social risk predicts healthcare costs. Currently most Z codes carry low or no HCC weight, but some payers now require their reporting to build more comprehensive risk profiles. Their role in risk adjustment is expected to expand.

The V28 transition is consequential. It recalibrated condition weights in ways that reduce risk scores for many conditions previously associated with aggressive coding optimization programs. Organizations that relied heavily on retrospective chart reviews and in-home health assessments to capture certain high-weight HCCs are experiencing meaningful revenue compression during the transition period.

## Why HCC Coding Matters

Accurate HCC coding is the financial engine of [[medicare-advantage-policy-primer|Medicare Advantage]] and most capitated [[value-based-care|VBC]] arrangements:

- **For MA plans**: RAF scores determine capitation revenue. A plan that systematically under-codes its enrolled population is underpaid for the patients it manages, regardless of how well it manages them.
- **For ACOs and capitated providers**: Organizations receiving per-member-per-month payments face the same dynamic — accurate risk scores are the prerequisite for adequate payment. In Primary Care First and similar models, population-based payments are calculated using the average RAF of the practice's attributed beneficiaries, so under-coding depresses the entire practice's payment base.
- **For quality and performance measurement**: HCC coding doesn't just affect revenue — it affects how a practice or plan looks on quality and cost metrics. Inaccurate risk scores mean a panel appears less complex than it is, making cost performance look worse and quality metrics harder to meet. A well-documented panel produces benchmarks that fairly reflect the difficulty of managing that population.
- **For CMS**: Accurate coding ensures the risk adjustment system achieves its intended purpose — equitable payment that eliminates incentives to avoid sick patients and rewards efficient management of complex ones.

Revenue leakage from missed or under-specified HCCs is estimated at **10–20%** of potential capitation for many organizations. The operational response — prospective coding programs, provider education, and documentation improvement — is now a core VBC competency.

## Related Pages

- [[risk-adjustment-coding]]
- [[hcc-coding-radv-audits]]
- [[how-risk-adjustment-affects-payment-medicare-advantage-plans]]
- [[value-based-care]]
- [[medicare-advantage-policy-primer]]
- [[inside-the-value-based-care-ecosystem]]
