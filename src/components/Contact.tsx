import { Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react/dist/iconify.js';
import { useTranslation } from 'react-i18next';
import { useState, FormEvent } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await emailjs.send(
        'service_k3zpr3l',      // Service ID
        'template_wfvi8x6',     // Template ID
        formData,
        'kLtFf9D5624Xutb9B'     // Public Key
      );

      setStatus('success');
      setFormData({ from_name: '', from_email: '', message: '' });

      // Reset success message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus('error');

      // Reset error message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-white mb-12 text-center"
        >
          {t('get_in_touch')}
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div
              whileHover={{ x: 5 }}
              className="flex items-center gap-4"
            >
              <Mail className="text-teal-400" size={24} />
              <div>
                <h3 className="text-white font-semibold">{t('email')}</h3>
                <p className="text-gray-400">r.apaza.cornejo@gmail.com</p>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ x: 5 }}
              className="flex items-center gap-4"
            >
              <Icon icon="mdi:linkedin" className="text-teal-400" fontSize={24}/>
              <div>
                <h3 className="text-white font-semibold">Linkedin</h3>
                <a className="text-gray-400 hover:text-teal-400 transition-colors" href="https://www.linkedin.com/in/rc-dev-fronted-developer/" target="_blank" rel="noopener noreferrer">Perfil</a>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ x: 5 }}
              className="flex items-center gap-4"
            >
              <MapPin className="text-teal-400" size={24} />
              <div>
                <h3 className="text-white font-semibold">{ t('location') }</h3>
                <p className="text-gray-400">Arequipa, Peru</p>
              </div>
            </motion.div>
          </motion.div>
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
            onSubmit={handleSubmit}
          >
            <motion.input
              whileFocus={{ scale: 1.01 }}
              type="text"
              name="from_name"
              value={formData.from_name}
              onChange={handleChange}
              placeholder={t('your_name')}
              required
              disabled={status === 'sending'}
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 disabled:opacity-50"
            />
            <motion.input
              whileFocus={{ scale: 1.01 }}
              type="email"
              name="from_email"
              value={formData.from_email}
              onChange={handleChange}
              placeholder={t('your_email')}
              required
              disabled={status === 'sending'}
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 disabled:opacity-50"
            />
            <motion.textarea
              whileFocus={{ scale: 1.01 }}
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder={t('your_message')}
              rows={4}
              required
              disabled={status === 'sending'}
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 disabled:opacity-50"
            ></motion.textarea>

            {/* Status Messages */}
            {status === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-3 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400 text-sm"
              >
                ✓ Message sent successfully!
              </motion.div>
            )}

            {status === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-3 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400 text-sm"
              >
                ✗ Error sending message. Please try again.
              </motion.div>
            )}

            <motion.button
              whileHover={{ scale: status === 'sending' ? 1 : 1.02 }}
              whileTap={{ scale: status === 'sending' ? 1 : 0.98 }}
              type="submit"
              disabled={status === 'sending'}
              className="w-full px-6 py-3 bg-teal-400 text-gray-900 rounded-lg font-semibold hover:bg-teal-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'sending' ? 'Sending...' : t('send_message')}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
