import React from 'react';
import ScrollToTop from './components/ScrollToTop';

function TermsAndConditions() {
  return (
    <>
    <div className="container text-light">
      <h1 className="text-center" style={{ color: '#fa880c' }}>KanavuLabs Standard Terms and Conditions</h1>

      <h2 style={{ color: '#fa880c' }}>1. Scope</h2>
      <p>
        These Standard Terms and Conditions ("Terms") govern the engagement between KanavuLabs ("KanavuLabs" or "We") and its clients ("Client" or "You") for the provision of marketing and software solutions. These solutions encompass, but are not limited to, website design, software development, Robotic Process Automation (RPA), Enterprise Resource Planning (ERP), Customer Relationship Management (CRM) systems, User Interface (UI) and graphic design, video editing, production, VFX, animation, cybersecurity services, technological consulting, and solutions incorporating Artificial Intelligence (AI), Machine Learning (ML), Augmented Reality (AR), and Virtual Reality (VR).
      </p>

      <h2 style={{ color: '#fa880c' }}>2. Client Materials</h2>
      <p>
        To ensure timely completion and adherence to agreed-upon specifications, Client must furnish all necessary materials and information to KanavuLabs. This includes, but is not limited to, photographs, written content, project requirements documentation, login credentials, and other relevant collateral. Any delays in providing such materials may necessitate an extension of previously agreed deadlines. Furthermore, KanavuLabs reserves the right to invoice for completed work if Client's failure to provide materials impedes project progress.
      </p>

      <h2 style={{ color: '#fa880c' }}>3. Project Requirements</h2>
      <p>
        Clear definition of project requirements by Client is essential during the initial engagement phase. Any subsequent modifications to these requirements must be communicated in writing to KanavuLabs.
      </p>

      <h2 style={{ color: '#fa880c' }}>4. Payment Terms</h2>
      <p>
        Invoices will be issued as follows:
        <ul>
          <li>60% at Commencement: This signifies the date Client confirms acceptance of the proposal and elects to proceed via email. Project initiation will only commence upon full payment of this invoice.</li>
          <li>40% at Delivery</li>
        </ul>
      </p>

      <h2 style={{ color: '#fa880c' }}>5. Revision Policy</h2>
      <p>
        Multiple revisions may incur additional charges under the following circumstances:
        <ul>
          <li>Modifications to the project brief by Client after work commences.</li>
          <li>Client requests exceeding the initial scope of work, necessitating multiple revisions or corrections.</li>
        </ul>
      </p>

      <h2 style={{ color: '#fa880c' }}>6. Design Rights</h2>
      <p>
        KanavuLabs reserves the right to utilize Client's product presentation image for promotional purposes on its social media platforms and website, at its sole discretion. This includes uploading, sharing, displaying, or removing the image.
      </p>

      <h2 style={{ color: '#fa880c' }}>7. Source File Responsibility</h2>
      <p>
        Following delivery of the final project files, KanavuLabs is not responsible for their long-term storage. Client assumes full responsibility for maintaining backup copies. Resending files may incur fees based on the complexity of data retrieval. KanavuLabs holds no liability for temporarily deleted files, and recovery services may be unavailable even if requested and compensated for.
      </p>

      <h2 style={{ color: '#fa880c' }}>8. Confidentiality</h2>
      <p>
        KanavuLabs is committed to maintaining the confidentiality of Client information and refrains from disclosing it to any external party.
      </p>

      <h2 style={{ color: '#fa880c' }}>9. Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by law, all terms, conditions, warranties, and representations (express, implied, statutory, or otherwise) related to the provided services are excluded, except for those explicitly outlined in these Terms. KanavuLabs' liability under any term, condition, warranty, or representation that cannot be legally excluded is limited, at KanavuLabs' discretion, to the replacement, re-repair, or re-supply of the services or the cost of the contracted services.
      </p>

      <h2 style={{ color: '#fa880c' }}>10. Contact Us</h2>
      <p>
        For any inquiries regarding these Terms and Conditions, please contact KanavuLabs via email at <a href="mailto:support@kanavulabs.com" style={{ color: '#fa880c' }}>support@kanavulabs.com</a>.
      </p>
    </div>
    <ScrollToTop />
    </>
  );
}

export default TermsAndConditions;
