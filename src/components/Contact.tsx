
import {  Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react/dist/iconify.js';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-white mb-12 text-center"
        >
          Get In Touch
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
                <h3 className="text-white font-semibold">Email</h3>
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
                <a className="text-gray-400" href="https://www.linkedin.com/in/rc-dev-fronted-developer/">Perfil</a>
              </div>
            </motion.div>
            <motion.div 
              whileHover={{ x: 5 }}
              className="flex items-center gap-4"
            >
              <MapPin className="text-teal-400" size={24} />
              <div>
                <h3 className="text-white font-semibold">Location</h3>
                <p className="text-gray-400">Arequipa, Peru</p>
              </div>
            </motion.div>
          </motion.div>
          <motion.form 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <motion.input
              whileFocus={{ scale: 1.01 }}
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
            <motion.input
              whileFocus={{ scale: 1.01 }}
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
            <motion.textarea
              whileFocus={{ scale: 1.01 }}
              placeholder="Your Message"
              rows={4}
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
            ></motion.textarea>
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-6 py-3 bg-teal-400 text-gray-900 rounded-lg font-semibold hover:bg-teal-500 transition-colors"
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}