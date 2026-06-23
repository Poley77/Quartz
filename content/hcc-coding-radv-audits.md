# HCC Coding Accuracy and RADV Audits

**Summary**: The documentation standards that make HCC codes defensible — the MEAT criteria, annual recapture requirements, and how CMS's RADV audit program validates and recovers risk adjustment payments.

**Sources**: RAAPID, ["Risk Adjustment Coding in 2026"](https://www.raapidinc.com/blogs/risk-adjustment-coding/)

**Last updated**: 2026-06-23

---

## Why Documentation Is the Whole Game

Assigning an HCC code is not enough. CMS's [[hcc-coding-intro|risk adjustment system]] is built on the principle that every submitted diagnosis code must be supported by clinical documentation in the medical record. An HCC code that appears in a claim but cannot be validated in the chart is treated as invalid — and the revenue associated with it is subject to recoupment.

This is the purpose of RADV audits: CMS reviews actual medical records to verify that submitted HCC codes are clinically supported. The documentation standard they apply is the **MEAT criteria**.

## The MEAT Criteria

MEAT is the framework CMS uses to determine whether a chronic condition was actively managed during an encounter — rather than merely noted in a problem list or patient history.

| Letter | Stands for | What it means |
|---|---|---|
| **M** | Monitor | Ongoing tracking — lab checks, vital monitoring, recurring assessments |
| **E** | Evaluate | Reviewing test results, clinical findings, or response to treatment |
| **A** | Assess / Address | Clinical judgment about current status — stable, improving, worsening |
| **T** | Treat | Active intervention — medication adjustment, referral, procedure, care plan change |

For a condition to support an HCC code for a given year, the clinical documentation must satisfy at least one MEAT component. Generic documentation — "patient has diabetes," "history of heart failure" — typically fails MEAT review because it does not demonstrate active management.

Historical audit data shows insufficient MEAT documentation has invalidated **20–40% of HCCs** in sampled charts.

## Annual Recapture

Because RAF scores reset each January 1st, every chronic condition must be re-documented with MEAT evidence within the current calendar year. This is called **annual recapture**.

Recapture creates real operational complexity:

- A patient with six chronic conditions needs all six documented with MEAT evidence in the current year — not just the ones that are actively changing
- Stable, well-controlled conditions are most frequently missed, because providers naturally focus documentation effort on acute or worsening problems
- Carry-forward statements ("patient has history of COPD, stable") are not sufficient — the condition must be specifically addressed in the context of the current encounter

**What counts as a qualifying encounter:**
- Face-to-face visits with physicians, NPs, PAs, or other qualified providers
- Telehealth encounters (accepted post-COVID policy change)
- Health Risk Assessments — with significant limitations (see below)

Revenue leakage from missed recapture averages **$3,000 per member annually** for patients with undocumented conditions.

## Coding Specificity

The most high-leverage coding improvement most organizations can make is increasing documentation specificity. The hierarchical structure of HCCs means vague codes that map to lower-severity categories produce lower RAF scores than codes that accurately reflect complications and severity.

| Documentation | ICD-10 code | HCC result |
|---|---|---|
| "Diabetes" | E11.9 (T2D, unspecified) | No HCC mapped, or lower-weight category |
| "Type 2 diabetes with diabetic chronic kidney disease, stage 3" | E11.22 + N18.3 | HCC 18 (Diabetes with chronic complications) + HCC 136 (CKD stage 3–5) |

High-prevalence conditions where specificity gaps are most costly:
- **Diabetes**: type, complications (neuropathy, nephropathy, retinopathy), comorbid conditions
- **Chronic kidney disease**: staging (1–5) dramatically affects HCC weight
- **Heart failure**: systolic vs. diastolic, acuity, NYHA class
- **COPD**: severity, exacerbation history
- **Depression and bipolar disorder**: severity specification
- **Hypertension with comorbidities**: often under-documented alongside other conditions

## The RADV Audit Process

**Risk Adjustment Data Validation (RADV)** audits are CMS's primary mechanism for verifying the accuracy of submitted HCC codes and recovering overpayments from plans or providers with inflated risk scores.

**How an audit works:**

1. CMS selects a sample of **301–450 charts per plan** for review
2. Medical records for the sampled enrollees are submitted to CMS auditors
3. Each submitted HCC code is reviewed against the clinical documentation
4. Codes without adequate MEAT documentation are invalidated
5. CMS extrapolates the error rate across the full enrolled population to calculate the recoupment amount

**Audit selection methodology**: CMS uses risk-based selection, targeting plans with risk scores that appear high relative to their demographic profile, unusually high rates of certain high-weight HCC codes, or significant reliance on chart review or in-home assessments as the primary coding source.

**Financial stakes**: Audit-related recoupments have historically exceeded **$4 billion across health plans**. CMS significantly expanded RADV audit activity following 2023 policy changes, making audit readiness a first-order operational priority for any MA plan or capitated provider.

## Documentation Hierarchy for Audit Defense

Not all clinical documentation carries equal weight in RADV review:

| Document type | Defensibility | Key considerations |
|---|---|---|
| Provider progress notes with explicit MEAT | Highest | All four MEAT components addressed, or condition clearly managed in context of visit |
| Specialist reports | High | Must be signed, dated, and attributable to the relevant encounter period |
| Health Risk Assessments (HRAs) | Limited | Only defensible if performed by a qualified physician with explicit MEAT documentation; checklist-style HRAs are weak |
| Nurse or MA visit notes | Low | Generally not a qualifying encounter for HCC purposes unless physician-supervised and co-signed |

**The HRA limitation** is particularly consequential. Many MA plans built coding programs around large-scale in-home health assessments to capture HCC codes retrospectively. CMS has significantly tightened the standards under which HRA-derived codes are considered valid, requiring direct physician involvement and explicit MEAT documentation rather than checklist completion. Plans that relied heavily on HRAs face disproportionate exposure in audits.

## Prospective vs. Retrospective Coding

There are two fundamental approaches to HCC coding improvement:

**Prospective coding**: Surfacing missed or under-specified diagnoses *before or during* the patient encounter — giving the provider the clinical context to document accurately at the point of care.

**Retrospective coding**: Reviewing charts *after* encounters to identify missed codes, then closing gaps through supplemental assessments, chart reviews, or HRAs.

CMS's regulatory tightening has shifted the risk-reward balance decisively toward prospective approaches:

- Prospective documentation naturally satisfies MEAT criteria because the provider is actively managing the condition in real time
- Retrospective codes derived from chart reviews or HRAs are subject to heightened RADV scrutiny
- Prospective coding programs reduce retrospective review needs by **30–50%**
- Audit defensibility is substantially stronger for prospective documentation

Tools that surface HCC opportunities to clinicians during pre-visit preparation — rather than after the encounter — are the technological expression of this shift. See [[phyx-2025-report-key-findings-on-navinas-ai-for-value-based-care]] for evidence on one such approach.

## Compliance Considerations

There is a legally meaningful distinction between:

- **Appropriate coding accuracy**: Ensuring real, actively managed conditions are documented at their correct specificity, and that all chronic conditions are recaptured annually
- **Upcoding**: Submitting codes for conditions that are not clinically present, not supported by the documentation, or inflated in severity without clinical basis

The former is expected operational practice in VBC. The latter exposes organizations to False Claims Act liability. RADV audits are one enforcement mechanism; DOJ investigations and settlement activity have produced multi-hundred-million-dollar recoveries from MA plans found to have engaged in systematic upcoding. The compliance posture matters as much as the revenue strategy.

## Implementation Checklist

Organizations building or improving HCC coding programs should address:

- [ ] Audit current HCC capture rates relative to benchmark populations
- [ ] Train providers on MEAT criteria and condition-specific documentation requirements
- [ ] Implement pre-visit preparation workflows surfacing chronic conditions due for annual recapture
- [ ] Establish coding review for specificity — particularly for high-prevalence conditions
- [ ] Develop RADV readiness protocols with evidence management and chart retrieval capability
- [ ] Reduce reliance on retrospective HRA-based coding programs

## Related Pages

- [[hcc-coding-intro]]
- [[risk-adjustment-coding]]
- [[how-risk-adjustment-affects-payment-medicare-advantage-plans]]
- [[taking-stock-medicare-advantage-payment]]
- [[value-based-care]]
- [[phyx-2025-report-key-findings-on-navinas-ai-for-value-based-care]]
