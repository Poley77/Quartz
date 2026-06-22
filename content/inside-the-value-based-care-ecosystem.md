# Inside the Value-Based Care Ecosystem

**Summary**: A map of the players, relationships, and incentive flows that make up the VBC ecosystem — who does what, who pays whom, and how risk moves through the system.

**Sources**: Pearcalls, "Inside the Value-Based Care Ecosystem" (2025)

**Last updated**: 2026-06-22

---

## The Core Players

The VBC ecosystem is built around a set of interdependent organizations, each playing a distinct role in managing population health and distributing financial risk.

**CMS (Centers for Medicare & Medicaid Services)**: The federal agency that sets the rules of the game for Medicare and Medicaid. CMS defines what payment models exist, what the benchmarks are, and how savings and losses are shared. Everything downstream flows from CMS policy.

**Medicare Advantage Plans**: Private insurers that contract with CMS to provide Medicare benefits. They receive a capitated payment per enrollee per month and take on full financial risk for that population's care. They are the largest vehicle for VBC in the U.S., enrolling roughly half of all Medicare beneficiaries.

**ACOs (Accountable Care Organizations)**: Groups of physicians, hospitals, and other providers that collectively take accountability for the cost and quality of care for an assigned patient population under Medicare. They operate under programs like MSSP or ACO REACH. See [[compare-aco-reach-mssp]].

**MSOs (Management Services Organizations)**: Backend infrastructure providers that support physician practices participating in VBC. They handle data analytics, care management, coding, compliance, and administrative functions that individual practices can't afford or build themselves. See [[breaking-down-care-platform-landscape]].

**Primary Care Physicians**: Often the central node in VBC — responsible for managing patients longitudinally, closing care gaps, and preventing expensive hospitalizations. PCPs are significantly more valuable under VBC than under FFS.

**Specialists and Hospitals**: Historically optimized for FFS volume. Under VBC, they face pressure to reduce unnecessary utilization — a structural tension with their traditional revenue model.

## How Risk Flows

Under traditional [[fee-for-service]], all financial risk sits with the payer. If patients are sicker than expected, the insurer pays more.

Under VBC, risk is progressively shifted toward providers:

1. **Upside-only**: Provider shares in savings if costs come in below benchmark, but bears no downside. Low risk, lower reward. (Early MSSP tracks)
2. **Two-sided risk**: Provider shares in savings and absorbs losses if costs exceed benchmark. Higher risk, higher reward. (Advanced MSSP, ACO REACH)
3. **Full capitation**: Provider receives a fixed per-member per-month payment and bears essentially all financial risk. Maximum risk, maximum control over care.

Most organizations move through these stages progressively as they build the data infrastructure, care management capabilities, and financial reserves required to handle downside risk.

## The Technology Layer

VBC requires a data and analytics infrastructure that FFS doesn't. Key capabilities:

- **Risk stratification**: Identifying which patients are most likely to generate expensive acute events so care managers can intervene proactively
- **Care gap identification**: Flagging patients who are overdue for screenings, medications, or follow-up visits
- **Claims analytics**: Understanding where spending is going across the attributed population
- **EHR integration**: Surfacing actionable insights at the point of care, not just in back-office reports

This is why [[ai-and-technology|AI and technology companies]] have become core infrastructure players in the VBC ecosystem. Companies like Navina operate specifically at this layer — helping providers surface relevant patient information to close care gaps and improve [[risk-adjustment-coding|risk adjustment coding]].

## Why the Ecosystem Is Complex

No single organization controls the full value chain. A Medicare Advantage plan contracts with an MSO, which supports a physician group, which participates in an ACO, which contracts back with CMS. Risk and revenue flow through multiple layers, each taking a margin.

This layering creates both opportunity (specialization, scale) and risk (misaligned incentives, administrative overhead). Understanding which layer a company operates in is essential to understanding its business model and competitive position.

## Related Pages

- [[value-based-care]]
- [[compare-aco-reach-mssp]]
- [[breaking-down-care-platform-landscape]]
- [[medicare]]
- [[ai-and-technology]]
- [[risk-adjustment-coding]]
- [[intro-to-value-based-care]]
