# Risk Adjustment Coding

**Summary**: How HCC coding works, why it matters financially under value-based care, and what's changing under updated CMS rules in 2026.

**Sources**: RAAPID, ["Risk Adjustment Coding in 2026"](https://www.raapidinc.com/blogs/risk-adjustment-coding/)

**Last updated**: 2026-06-22

---

## What Risk Adjustment Is

Risk adjustment is the mechanism CMS uses to ensure that health plans and providers are paid appropriately for the actual health burden of their patient populations — not just the average Medicare beneficiary.

The core logic: a plan or ACO that enrolls sicker patients should receive more money than one that enrolls healthier patients, even if both populations have the same demographic profile. Without risk adjustment, there's a powerful incentive to avoid sick patients.

## How HCC Coding Works

CMS uses **Hierarchical Condition Categories (HCCs)** to measure patient risk. Each HCC corresponds to a group of related diagnoses that predict future healthcare costs. Examples include:

- HCC 18: Diabetes with chronic complications
- HCC 85: Congestive heart failure
- HCC 111: Chronic obstructive pulmonary disease

Each HCC is assigned a **risk weight** that reflects how much more expensive — on average — patients with that condition are than a baseline Medicare beneficiary. A patient's total **RAF score (Risk Adjustment Factor)** is the sum of their demographic score plus all applicable HCC weights.

**Capitation payment = National base rate × RAF score**

A patient with a RAF score of 1.5 generates 50% more revenue than an average Medicare beneficiary. A score of 0.8 generates 20% less.

## Why Coding Accuracy Matters

HCC codes must be documented by a physician in the medical record within the relevant calendar year. If a chronic condition exists but isn't documented in that year's visit notes, it doesn't count toward the RAF score — even if it was coded in prior years.

This creates a significant revenue risk. A patient with diabetes, heart failure, and COPD who has all three conditions coded generates dramatically more capitation revenue than the same patient with only one condition coded.

For a typical Medicare Advantage plan or capitated ACO, closing coding gaps can be worth hundreds of dollars per member per year across a large population.

## Common Coding Gaps

The most frequently missed HCC opportunities involve:

- **Chronic conditions not reviewed annually**: CMS requires conditions to be documented each year. Organizations often miss re-documentation of stable chronic conditions.
- **Specificity**: Coding "diabetes" (which may not map to an HCC) vs. "type 2 diabetes with diabetic chronic kidney disease" (which maps to a higher-weighted HCC).
- **Comorbidities**: Related conditions that are present but not separately documented — e.g., a patient with heart failure who also has fluid overload and cachexia.

## What's Changing in 2026

CMS has been refining the HCC model (known as CMS-HCC V28) with updates that affect how conditions are weighted. Key changes in the 2026 model:

- Revised condition categories that more accurately reflect current clinical and cost patterns
- Increased scrutiny of diagnosis codes submitted through chart reviews vs. face-to-face encounters
- Greater emphasis on **encounter data** rather than just claims for risk score calculation

CMS has also increased auditing of risk adjustment data submission, making accurate and defensible documentation more important than ever. The distinction between appropriate coding improvement (documenting real conditions accurately) and improper upcoding (inflating scores without clinical basis) has significant compliance implications.

## Related Pages

- [[how-risk-adjustment-affects-payment-medicare-advantage-plans]]
- [[value-based-care]]
- [[medicare]]
- [[inside-the-value-based-care-ecosystem]]
- [[vbc-under-pressure-five-insights-from-the-front-lines]]
- [[the-math-of-acos]]
