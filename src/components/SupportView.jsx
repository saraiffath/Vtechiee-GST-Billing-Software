import WhatsNew from './WhatsNew';
import ProblemLog from './ProblemLog';
import { SafePrivateSection } from './SafePrivateNote';

const REPO = 'https://github.com/saraiffath/Vtechiee-GST-Billing-Software';
const UPSTREAM = 'https://github.com/IamRamgarhia/Free-GST-Billing-Software';

export default function SupportView() {
  return (
    <div className="dashboard-container">
      <div className="page-header">
        <div>
          <h1 className="page-title">Support &amp; About</h1>
          <p className="page-subtitle">Vtechiee GST Billing Software</p>
        </div>
      </div>
      <div className="glass-panel" style={{ padding: '1.25rem', marginBottom: '1.25rem' }}>
        <h3>Maintained by Vtechiee Systems</h3>
        <p>Independent MIT-licensed edition of Free GST Billing Software by DiceCodes. Original copyright and license are retained.</p>
        <p>For help and feature requests, use our GitHub repository. Never include real invoice or customer records in an issue.</p>
        <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
          <a className="btn btn-primary" href={`${REPO}/issues`} target="_blank" rel="noopener noreferrer">Report an issue</a>
          <a className="btn btn-secondary" href={UPSTREAM} target="_blank" rel="noopener noreferrer">Original project</a>
        </div>
      </div>
      <SafePrivateSection style={{ marginBottom: '1.25rem' }} />
      <WhatsNew />
      <ProblemLog />
    </div>
  );
}
