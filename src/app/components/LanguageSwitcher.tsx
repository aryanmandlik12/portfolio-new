
'use client';

import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

export default function LanguageSwitcher() {
    const { language, setLanguage } = useLanguage();

    return (
        <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            onClick={() => setLanguage(language === 'en' ? 'de' : 'en')}
            className="fixed top-4 right-4 z-50 px-4 py-2 bg-neutral-800/80 backdrop-blur-sm border border-neutral-700 rounded-full text-neutral-200 hover:bg-neutral-700 transition-colors font-medium text-sm flex items-center gap-2"
        >
            <span>{language === 'en' ? '🇩🇪 German' : '🇬🇧 English'}</span>
        </motion.button>
    );
}
