import React, { useState } from 'react';
import { 
  X, 
  Mail, 
  Link, 
  Users, 
  Copy, 
  Send, 
  Upload,
  UserPlus,
  MessageSquare,
  Share2,
  QrCode,
  Download
} from 'lucide-react';

interface InvitationModalProps {
  isOpen: boolean;
  onClose: () => void;
  organizationName: string;
  organizationType: 'church' | 'mosque' | 'synagogue';
}

const InvitationModal: React.FC<InvitationModalProps> = ({ 
  isOpen, 
  onClose, 
  organizationName,
  organizationType 
}) => {
  const [activeTab, setActiveTab] = useState<'email' | 'link' | 'bulk' | 'social'>('email');
  const [emailList, setEmailList] = useState('');
  const [personalMessage, setPersonalMessage] = useState('');
  const [inviteLink] = useState(`https://believe.com/join/${organizationName.toLowerCase().replace(/\s+/g, '-')}`);
  const [linkCopied, setLinkCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(inviteLink);
      setLinkCopied(true);
      setTimeout(() => setLinkCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy link:', err);
    }
  };

  const handleSendEmails = () => {
    const emails = emailList.split('\n').filter(email => email.trim());
    console.log('Sending invitations to:', emails);
    // Here you would integrate with your email service
    alert(`Uitnodigingen verzonden naar ${emails.length} e-mailadressen!`);
    onClose();
  };

  const handleBulkUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Here you would process the CSV file
      console.log('Processing file:', file.name);
      alert('CSV bestand wordt verwerkt...');
    }
  };

  const getOrgIcon = () => {
    switch (organizationType) {
      case 'church': return '⛪';
      case 'mosque': return '🕌';
      case 'synagogue': return '🕍';
      default: return '🏛️';
    }
  };

  const tabs = [
    { id: 'email' as const, label: 'E-mail Uitnodigingen', icon: Mail },
    { id: 'link' as const, label: 'Uitnodigingslink', icon: Link },
    { id: 'bulk' as const, label: 'Bulk Import', icon: Upload },
    { id: 'social' as const, label: 'Sociale Media', icon: Share2 }
  ];

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-slate-600">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl">
              <UserPlus className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Leden Uitnodigen</h2>
              <p className="text-gray-600 dark:text-gray-400">Nodig nieuwe leden uit voor {organizationName}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-lg transition-colors"
          >
            <X className="h-6 w-6 text-gray-600 dark:text-gray-400" />
          </button>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200 dark:border-slate-600">
          <div className="flex space-x-0">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-6 py-4 border-b-2 transition-colors ${
                    activeTab === tab.id
                      ? 'border-emerald-500 text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20'
                      : 'border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span className="font-medium">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 max-h-[60vh] overflow-y-auto">
          {activeTab === 'email' && (
            <div className="space-y-6">
              <div className="bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-xl border border-emerald-200 dark:border-emerald-700">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-2xl">{getOrgIcon()}</span>
                  <h3 className="font-semibold text-emerald-800 dark:text-emerald-200">Persoonlijke Uitnodigingen</h3>
                </div>
                <p className="text-emerald-700 dark:text-emerald-300 text-sm">
                  Verstuur persoonlijke e-mail uitnodigingen naar potentiële leden
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  E-mailadressen (één per regel)
                </label>
                <textarea
                  value={emailList}
                  onChange={(e) => setEmailList(e.target.value)}
                  placeholder="john@example.com&#10;maria@example.com&#10;david@example.com"
                  className="w-full h-32 px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-white dark:bg-slate-700 text-gray-900 dark:text-white resize-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Persoonlijk bericht (optioneel)
                </label>
                <textarea
                  value={personalMessage}
                  onChange={(e) => setPersonalMessage(e.target.value)}
                  placeholder="Voeg een persoonlijk bericht toe aan je uitnodiging..."
                  className="w-full h-24 px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-white dark:bg-slate-700 text-gray-900 dark:text-white resize-none"
                />
              </div>

              <button
                onClick={handleSendEmails}
                disabled={!emailList.trim()}
                className="w-full flex items-center justify-center space-x-2 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed font-semibold"
              >
                <Send className="h-5 w-5" />
                <span>Uitnodigingen Versturen</span>
              </button>
            </div>
          )}

          {activeTab === 'link' && (
            <div className="space-y-6">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border border-blue-200 dark:border-blue-700">
                <div className="flex items-center space-x-2 mb-2">
                  <Link className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  <h3 className="font-semibold text-blue-800 dark:text-blue-200">Uitnodigingslink</h3>
                </div>
                <p className="text-blue-700 dark:text-blue-300 text-sm">
                  Deel deze link om mensen direct uit te nodigen voor je gemeenschap
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Jouw uitnodigingslink
                </label>
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={inviteLink}
                    readOnly
                    className="flex-1 px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-xl bg-gray-50 dark:bg-slate-700 text-gray-900 dark:text-white"
                  />
                  <button
                    onClick={handleCopyLink}
                    className={`px-4 py-3 rounded-xl transition-all duration-300 ${
                      linkCopied
                        ? 'bg-green-500 text-white'
                        : 'bg-blue-500 hover:bg-blue-600 text-white'
                    }`}
                  >
                    {linkCopied ? 'Gekopieerd!' : <Copy className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <button className="flex items-center justify-center space-x-2 p-4 border-2 border-dashed border-gray-300 dark:border-slate-600 rounded-xl hover:border-blue-400 dark:hover:border-blue-500 transition-colors">
                  <QrCode className="h-6 w-6 text-gray-600 dark:text-gray-400" />
                  <span className="text-gray-700 dark:text-gray-300">QR Code Genereren</span>
                </button>
                
                <button className="flex items-center justify-center space-x-2 p-4 border-2 border-dashed border-gray-300 dark:border-slate-600 rounded-xl hover:border-green-400 dark:hover:border-green-500 transition-colors">
                  <Download className="h-6 w-6 text-gray-600 dark:text-gray-400" />
                  <span className="text-gray-700 dark:text-gray-300">Link Downloaden</span>
                </button>
              </div>
            </div>
          )}

          {activeTab === 'bulk' && (
            <div className="space-y-6">
              <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-xl border border-purple-200 dark:border-purple-700">
                <div className="flex items-center space-x-2 mb-2">
                  <Upload className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                  <h3 className="font-semibold text-purple-800 dark:text-purple-200">Bulk Import</h3>
                </div>
                <p className="text-purple-700 dark:text-purple-300 text-sm">
                  Upload een CSV bestand met e-mailadressen om meerdere mensen tegelijk uit te nodigen
                </p>
              </div>

              <div className="border-2 border-dashed border-gray-300 dark:border-slate-600 rounded-xl p-8 text-center">
                <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Upload CSV Bestand</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Sleep je CSV bestand hier of klik om te selecteren
                </p>
                <input
                  type="file"
                  accept=".csv"
                  onChange={handleBulkUpload}
                  className="hidden"
                  id="csv-upload"
                />
                <label
                  htmlFor="csv-upload"
                  className="inline-flex items-center space-x-2 px-6 py-3 bg-purple-500 text-white rounded-xl hover:bg-purple-600 transition-colors cursor-pointer"
                >
                  <Upload className="h-5 w-5" />
                  <span>Bestand Selecteren</span>
                </label>
              </div>

              <div className="bg-gray-50 dark:bg-slate-700 p-4 rounded-xl">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">CSV Formaat:</h4>
                <code className="text-sm text-gray-700 dark:text-gray-300">
                  email,name<br/>
                  john@example.com,John Doe<br/>
                  maria@example.com,Maria Smith
                </code>
              </div>
            </div>
          )}

          {activeTab === 'social' && (
            <div className="space-y-6">
              <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-xl border border-orange-200 dark:border-orange-700">
                <div className="flex items-center space-x-2 mb-2">
                  <Share2 className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                  <h3 className="font-semibold text-orange-800 dark:text-orange-200">Sociale Media</h3>
                </div>
                <p className="text-orange-700 dark:text-orange-300 text-sm">
                  Deel je uitnodiging op sociale media platforms
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <button className="flex items-center space-x-3 p-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors">
                  <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-sm">f</span>
                  </div>
                  <span className="font-semibold">Delen op Facebook</span>
                </button>

                <button className="flex items-center space-x-3 p-4 bg-sky-500 text-white rounded-xl hover:bg-sky-600 transition-colors">
                  <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                    <span className="text-sky-500 font-bold text-sm">𝕏</span>
                  </div>
                  <span className="font-semibold">Delen op X (Twitter)</span>
                </button>

                <button className="flex items-center space-x-3 p-4 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-colors">
                  <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                    <MessageSquare className="h-4 w-4 text-green-600" />
                  </div>
                  <span className="font-semibold">Delen via WhatsApp</span>
                </button>

                <button className="flex items-center space-x-3 p-4 bg-blue-700 text-white rounded-xl hover:bg-blue-800 transition-colors">
                  <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                    <span className="text-blue-700 font-bold text-sm">in</span>
                  </div>
                  <span className="font-semibold">Delen op LinkedIn</span>
                </button>
              </div>

              <div className="bg-gray-50 dark:bg-slate-700 p-4 rounded-xl">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Voorgestelde tekst:</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm italic">
                  "Sluit je aan bij onze gemeenschap bij {organizationName}! 
                  Een warme, welkomende plek waar geloof en gemeenschap samenkomen. 
                  {inviteLink}"
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InvitationModal;