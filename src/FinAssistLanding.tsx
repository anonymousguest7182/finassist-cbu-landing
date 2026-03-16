import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Sparkles, Wallet, BarChart3, Target, Users, ArrowRightLeft, Smartphone, Shield, Lock, Fingerprint, Menu, X, ChevronRight, MessageSquare, Bell, CheckCircle2, AlertTriangle, Terminal, CreditCard, Send
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export default function FinAssistLanding() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeTab, setActiveTab] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="min-h-screen bg-[#0A0F1C] text-white overflow-hidden font-sans selection:bg-emerald-500/30">
            {/* Grid Background */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b98110_1px,transparent_1px),linear-gradient(to_bottom,#10b98110_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
            </div>

            {/* Navbar */}
            <nav className={cn(
                'fixed top-0 w-full z-50 transition-all duration-300',
                isScrolled ? 'glass py-4' : 'bg-transparent py-6'
            )}>
                <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
                    <div className="flex items-center gap-2 cursor-pointer">
                        <div className="font-bold text-xl tracking-tight flex items-center">
                            Fin<span className="text-emerald-500 ml-0.5">Assist</span>
                        </div>
                        <Sparkles className="w-4 h-4 text-emerald-400" />
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
                        <a href="#features" className="hover:text-white transition-colors">Возможности</a>
                        <a href="#how-it-works" className="hover:text-white transition-colors">Как это работает</a>
                        <a href="#ai" className="hover:text-white transition-colors tracking-wide"><span className="shimmer-text">AI-аналитика</span></a>
                        <a href="#team" className="hover:text-white transition-colors">Команда</a>
                    </div>

                    <div className="hidden md:flex items-center gap-4">
                        <button className="px-4 py-2 text-sm font-medium rounded-full border border-white/10 hover:bg-white/5 transition-colors">
                            Открыть приложение
                        </button>
                        <button className="px-5 py-2 text-sm font-medium rounded-full bg-emerald-500 hover:bg-emerald-400 text-white shadow-[0_0_15px_rgba(16,185,129,0.4)] hover:shadow-[0_0_25px_rgba(16,185,129,0.6)] transition-all">
                            Telegram Bot
                        </button>
                    </div>

                    {/* Mobile Toggle */}
                    <button className="md:hidden text-gray-300" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative z-10 pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
                <div className="container mx-auto max-w-7xl relative">
                    <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 text-sm font-medium mb-8 shadow-[0_0_15px_rgba(16,185,129,0.2)]"
                        >
                            <span>🏦 CBU Coding Hackathon 2025</span>
                        </motion.div>

                        {/* Headline */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight mb-6"
                        >
                            Ваш личный финансовый ассистент с <br className="hidden md:block" />
                            <span className="shimmer-text">искусственным интеллектом</span>
                        </motion.h1>

                        {/* Subhead */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl"
                        >
                            Управляйте доходами, расходами, долгами и бюджетом в одном приложении. Просто напишите «потратил 50к на такси» — AI сделает остальное.
                        </motion.p>

                        {/* CTAs */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center"
                        >
                            <button className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white font-semibold shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:shadow-[0_0_30px_rgba(16,185,129,0.6)] transition-all flex items-center justify-center gap-2">
                                Открыть приложение
                                <ChevronRight className="w-5 h-5" />
                            </button>
                            <button className="w-full sm:w-auto px-8 py-3.5 rounded-full glass border border-white/20 hover:bg-white/10 text-white font-semibold flex items-center justify-center gap-2 transition-all">
                                <Send className="w-5 h-5 text-blue-400" />
                                Попробовать в Telegram
                            </button>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="text-sm text-gray-500 mt-6 flex items-center gap-2"
                        >
                            Бесплатно • Без регистрации карты • Данные хранятся в Узбекистане 🇺🇿
                        </motion.p>
                    </div>

                    {/* Dashboard Mockup */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="mt-20 relative max-w-5xl mx-auto"
                        style={{ perspective: '1000px' }}
                    >
                        <div className="relative w-full rounded-2xl glass border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5),0_0_30px_rgba(16,185,129,0.15)] overflow-hidden flex flex-col md:flex-row transform rotate-x-[2deg] rotate-y-[-5deg] hover:rotate-0 transition-transform duration-700 ease-out">

                            {/* Sidebar Mockup */}
                            <div className="w-full md:w-64 bg-white/5 border-r border-white/5 p-6 hidden md:flex flex-col gap-6">
                                <div className="h-8 w-32 bg-white/10 rounded animate-pulse" />
                                <div className="space-y-4">
                                    <div className="h-10 w-full bg-white/10 rounded" />
                                    <div className="h-10 w-full bg-white/5 rounded" />
                                    <div className="h-10 w-full bg-white/5 rounded" />
                                    <div className="h-10 w-full bg-white/5 rounded" />
                                </div>
                            </div>

                            {/* Main Content Mockup */}
                            <div className="flex-1 p-6 md:p-10">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                                    <div className="glass p-6 rounded-xl border-t border-white/20">
                                        <p className="text-gray-400 text-sm mb-2">Uzcard</p>
                                        <h3 className="text-3xl font-bold flex items-center justify-between">
                                            3 450 000 UZS
                                            <Wallet className="text-emerald-500 w-8 h-8 opacity-50" />
                                        </h3>
                                    </div>
                                    <div className="glass p-6 rounded-xl border-t border-white/20">
                                        <p className="text-gray-400 text-sm mb-2">Наличные USD</p>
                                        <h3 className="text-3xl font-bold flex items-center justify-between">
                                            $420.00
                                            <CreditCard className="text-blue-500 w-8 h-8 opacity-50" />
                                        </h3>
                                    </div>
                                </div>

                                <div className="grid-cols-1 md:grid-cols-3 grid gap-6">
                                    {/* Transactions List */}
                                    <div className="glass p-6 rounded-xl col-span-2">
                                        <h4 className="font-medium mb-4 text-gray-300">Последние операции</h4>
                                        <div className="space-y-4">
                                            {[
                                                { icon: '🍕', name: 'Korzinka', amount: '-85 000 UZS', color: 'text-red-400' },
                                                { icon: '🚕', name: 'Yandex Go', amount: '-23 000 UZS', color: 'text-red-400' },
                                                { icon: '💰', name: 'Зарплата', amount: '+4 500 000 UZS', color: 'text-emerald-400' }
                                            ].map((t, i) => (
                                                <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 transition">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-lg">{t.icon}</div>
                                                        <span className="font-medium">{t.name}</span>
                                                    </div>
                                                    <span className={cn('font-semibold', t.color)}>{t.amount}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* CBU Score Tool mock */}
                                    <div className="glass p-6 rounded-xl flex flex-col items-center justify-center">
                                        <h4 className="font-medium text-gray-300 mb-6">CBU-Score</h4>
                                        <div className="relative w-32 h-32">
                                            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                                                <circle cx="50" cy="50" r="40" fill="none" stroke="#1f2937" strokeWidth="8" strokeLinecap="round" strokeDasharray="251.2" strokeDashoffset="0" />
                                                <circle cx="50" cy="50" r="40" fill="none" stroke="#10b981" strokeWidth="8" strokeLinecap="round" strokeDasharray="251.2" strokeDashoffset="55.2" className="drop-shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
                                            </svg>
                                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                                <span className="text-3xl font-bold text-white">780</span>
                                                <span className="text-[10px] text-emerald-400 uppercase tracking-widest mt-1">Отлично</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Glow under mockup */}
                        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-20 bg-emerald-500/20 blur-[100px] rounded-full -z-10" />
                    </motion.div>
                </div>
            </section>

            {/* Social Proof Bar */}
            <section className="border-y border-white/5 bg-white/[0.02] py-8">
                <div className="container mx-auto px-6 text-center">
                    <p className="text-sm text-gray-500 font-medium mb-6 uppercase tracking-wider">Разработано для интеграции с</p>
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                        <span className="text-xl font-bold font-serif">Центральный Банк РУз</span>
                        <span className="text-xl font-bold tracking-tight">UZCARD</span>
                        <span className="text-xl font-bold tracking-tighter">HUMO</span>
                        <span className="text-xl font-bold text-teal-400">Payme</span>
                        <span className="text-xl font-bold text-blue-400">Click</span>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section id="features" className="py-24 relative">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Всё для управления финансами</h2>
                        <p className="text-gray-400 text-lg">
                            Не просто таблица расходов — полноценный финансовый ассистент,
                            который работает за вас.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { icon: Wallet, title: 'Счета и карты', desc: 'Добавляйте карты Uzcard, HUMO, наличные. Баланс обновляется автоматически при каждой операции.' },
                            { icon: BarChart3, title: 'Умная статистика', desc: 'Графики по категориям, месяцам, неделям. Видите куда уходят деньги — и принимаете решения.' },
                            { icon: Target, title: 'Бюджеты', desc: 'Установите лимит на «Кафе» в 500к. Система предупредит, когда вы близки к перерасходу.' },
                            { icon: Users, title: 'Долги и задолженности', desc: 'Кому должны вы, кто должен вам. Статусы, напоминания, P2P-инвойсинг через Telegram.' },
                            { icon: ArrowRightLeft, title: 'Переводы', desc: 'Перевод между своими счетами, мультивалютность UZS/USD с автоматической конвертацией.' },
                            { icon: Smartphone, title: 'Работает везде', desc: 'Веб-приложение, Telegram Mini App и чат-бот. Одни данные — три способа доступа.' },
                        ].map((feature, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="glass p-8 rounded-2xl border border-white/5 hover:border-emerald-500/50 transition-all group"
                            >
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 flex items-center justify-center mb-6">
                                    <feature.icon className="text-emerald-400 w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-semibold mb-3 group-hover:text-emerald-400 transition-colors">{feature.title}</h3>
                                <p className="text-gray-400 leading-relaxed">
                                    {feature.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* AI Showcase */}
            <section id="ai" className="py-24 relative border-t border-white/5 bg-gradient-to-b from-transparent to-emerald-900/10">
                <div className="absolute inset-0 z-0 opacity-20">
                    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="neural-net" width="60" height="60" patternUnits="userSpaceOnUse">
                                <circle cx="30" cy="30" r="2" fill="#10b981" />
                                <path d="M30 30 L60 0 M30 30 L0 0 M30 30 L60 60 L30 30 L0 60" stroke="#10b981" strokeWidth="0.5" opacity="0.5" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#neural-net)" />
                    </svg>
                </div>

                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-medium mb-6"
                        >
                            <Terminal className="w-4 h-4" />
                            Core Engine
                        </motion.div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">AI, который понимает ваши финансы</h2>
                        <p className="text-gray-400 text-lg">
                            Не просто записывает — анализирует, предсказывает, предупреждает
                        </p>
                    </div>

                    {/* AI Tabs */}
                    <div className="max-w-5xl mx-auto">
                        <div className="flex overflow-x-auto hide-scrollbar gap-2 mb-8 p-1 glass rounded-2xl md:rounded-full">
                            {['Умный ввод', 'Авто-категоризация', 'CBU-Score', 'Умные алерты'].map((tab, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setActiveTab(idx)}
                                    className={cn(
                                        'flex-1 whitespace-nowrap px-6 py-3 rounded-xl md:rounded-full text-sm font-medium transition-all duration-300',
                                        activeTab === idx
                                            ? 'bg-emerald-500 text-white shadow-[0_0_15px_rgba(16,185,129,0.3)]'
                                            : 'text-gray-400 hover:text-white hover:bg-white/5'
                                    )}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>

                        <div className="glass p-8 md:p-12 rounded-3xl border border-emerald-500/20 shadow-[0_0_40px_rgba(16,185,129,0.1)] min-h-[400px] flex items-center relative overflow-hidden">
                            {/* Background Glow */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[100px] -z-10" />

                            <AnimatePresence mode="wait">
                                {activeTab === 0 && (
                                    <motion.div
                                        key="tab0"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        className="w-full grid md:grid-cols-2 gap-12 items-center"
                                    >
                                        <div className="space-y-4">
                                            <div className="bg-white/10 ml-auto w-3/4 p-4 rounded-2xl rounded-tr-sm text-sm">
                                                Дал в долг Рустаму 500к
                                            </div>
                                            <div className="flex gap-3">
                                                <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center shrink-0">
                                                    <Sparkles className="w-4 h-4 text-emerald-400" />
                                                </div>
                                                <div className="bg-white/5 p-4 rounded-2xl rounded-tl-sm text-sm text-emerald-100">
                                                    Записал! Долг: Рустам, 500 000 UZS. Статус: Открыт
                                                </div>
                                            </div>
                                            <div className="bg-white/10 ml-auto w-4/5 p-4 rounded-2xl rounded-tr-sm text-sm">
                                                Потратил 40к на такси с узкарта
                                            </div>
                                            <div className="flex gap-3">
                                                <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center shrink-0">
                                                    <Sparkles className="w-4 h-4 text-emerald-400" />
                                                </div>
                                                <div className="bg-white/5 p-4 rounded-2xl rounded-tl-sm text-sm text-emerald-100">
                                                    💸 Расход: 40 000 UZS • Категория: Транспорт • Счёт: Uzcard • Баланс: 3 410 000 UZS
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold mb-4">Никаких форм и кнопок</h3>
                                            <p className="text-gray-400 leading-relaxed">
                                                Просто пишите как другу — текстом или голосом. Наш NLP-движок на базе Claude мгновенно распознает сумму, категорию, счёт и тип операции. Забудьте о ручном заполнении десятков полей.
                                            </p>
                                        </div>
                                    </motion.div>
                                )}

                                {activeTab === 1 && (
                                    <motion.div
                                        key="tab1"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        className="w-full grid md:grid-cols-2 gap-12 items-center"
                                    >
                                        <div className="flex flex-col items-center justify-center gap-6">
                                            <div className="flex items-center gap-4">
                                                <span className="px-4 py-2 bg-white/5 rounded-lg border border-white/10">Korzinka Чиланзар</span>
                                                <ArrowRightLeft className="text-emerald-500 animate-pulse" />
                                                <span className="px-4 py-2 bg-emerald-500/20 text-emerald-300 rounded-lg border border-emerald-500/30 flex items-center gap-2">
                                                    🛒 Еда и продукты <span className="text-xs bg-emerald-500/30 px-1 rounded">98%</span>
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-4 opacity-75">
                                                <span className="px-4 py-2 bg-white/5 rounded-lg border border-white/10">Yandex Go</span>
                                                <ArrowRightLeft className="text-emerald-500" />
                                                <span className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-lg border border-blue-500/30 flex items-center gap-2">
                                                    🚕 Транспорт <span className="text-xs bg-blue-500/30 px-1 rounded">99%</span>
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-4 opacity-50">
                                                <span className="px-4 py-2 bg-white/5 rounded-lg border border-white/10">OSON: эл. энергия</span>
                                                <ArrowRightLeft className="text-emerald-500" />
                                                <span className="px-4 py-2 bg-yellow-500/20 text-yellow-300 rounded-lg border border-yellow-500/30 flex items-center gap-2">
                                                    🏠 ЖКХ <span className="text-xs bg-yellow-500/30 px-1 rounded">95%</span>
                                                </span>
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold mb-4">Zero-shot классификация</h3>
                                            <p className="text-gray-400 leading-relaxed">
                                                Двухуровневая система: мгновенная классификация по базе из 10 000+ мерчантов Узбекистана, плюс мощная ML-модель для нестандартных описаний. Данные на 100% обезличиваются перед обработкой.
                                            </p>
                                        </div>
                                    </motion.div>
                                )}

                                {activeTab === 2 && (
                                    <motion.div
                                        key="tab2"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        className="w-full flex flex-col items-center text-center"
                                    >
                                        <div className="relative w-48 h-48 mb-6">
                                            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                                                <circle cx="50" cy="50" r="40" fill="none" stroke="#1f2937" strokeWidth="6" strokeLinecap="round" strokeDasharray="251.2" strokeDashoffset="0" />
                                                <motion.circle
                                                    initial={{ strokeDashoffset: 251.2 }}
                                                    animate={{ strokeDashoffset: 55.2 }}
                                                    transition={{ duration: 1.5, ease: "easeOut" }}
                                                    cx="50" cy="50" r="40" fill="none" stroke="#10b981" strokeWidth="6" strokeLinecap="round" strokeDasharray="251.2"
                                                    className="drop-shadow-[0_0_12px_rgba(16,185,129,0.8)]"
                                                />
                                            </svg>
                                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                                <span className="text-5xl font-bold text-white">780</span>
                                                <span className="text-sm text-emerald-400 uppercase tracking-widest mt-1">Отлично</span>
                                            </div>
                                        </div>
                                        <div className="flex flex-wrap justify-center gap-4 mb-8">
                                            <span className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-lg text-sm"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Доходы {'>'} расходов: +100</span>
                                            <span className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-lg text-sm"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Бюджеты: +150</span>
                                            <span className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-lg text-sm"><AlertTriangle className="w-4 h-4 text-yellow-400" /> 1 долг: -50</span>
                                        </div>
                                        <p className="text-gray-400 max-w-2xl">
                                            Альтернативный скоринг. Оценивает финансовую дисциплину даже без банковской кредитной истории — анализируя реальное поведение пользователя.
                                        </p>
                                    </motion.div>
                                )}

                                {activeTab === 3 && (
                                    <motion.div
                                        key="tab3"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        className="w-full grid md:grid-cols-2 gap-12 items-center"
                                    >
                                        <div className="space-y-4">
                                            <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.1 }} className="glass p-4 rounded-xl flex items-start gap-4 border-l-4 border-red-500">
                                                <AlertTriangle className="text-red-500 shrink-0 mt-0.5" />
                                                <div>
                                                    <h5 className="font-medium text-red-100">Внимание: перерасход</h5>
                                                    <p className="text-sm justify-between text-gray-400 mt-1">Расходы на кафе за 10 дней составили 60% от месячного лимита.</p>
                                                </div>
                                            </motion.div>
                                            <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="glass p-4 rounded-xl flex items-start gap-4 border-l-4 border-yellow-500">
                                                <Bell className="text-yellow-500 shrink-0 mt-0.5" />
                                                <div>
                                                    <h5 className="font-medium text-yellow-100">Напоминание об оплате</h5>
                                                    <p className="text-sm text-gray-400 mt-1">Пора оплатить коммунальные услуги (ориент. 150 000 UZS).</p>
                                                </div>
                                            </motion.div>
                                            <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.3 }} className="glass p-4 rounded-xl flex items-start gap-4 border-l-4 border-emerald-500">
                                                <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" />
                                                <div>
                                                    <h5 className="font-medium text-emerald-100">Отличная тенденция!</h5>
                                                    <p className="text-sm text-gray-400 mt-1">В этом месяце вы экономите на 15% больше по сравнению с прошлым.</p>
                                                </div>
                                            </motion.div>
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold mb-4">Действуйте на опережение</h3>
                                            <p className="text-gray-400 leading-relaxed">
                                                Проактивный ассистент, который предупреждает о проблемах до того, как они станут критичными. Выявление аномальных трат через круглосуточный статистический анализ ваших паттернов.
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </section>

            {/* How it Works */}
            <section id="how-it-works" className="py-24 relative">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Как начать за 60 секунд</h2>
                        <p className="text-gray-400 text-lg">
                            Никаких долгих настроек. Быстрый старт.
                        </p>
                    </div>

                    <div className="relative">
                        {/* Connecting Line */}
                        <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-px bg-white/10">
                            <motion.div
                                className="absolute top-0 left-0 h-full bg-emerald-500 w-[100px] blur-sm"
                                animate={{ left: ['0%', '100%'] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                            {[
                                { icon: Smartphone, title: '1. Откройте приложение', desc: 'В браузере или прямо в Telegram — мгновенная регистрация.' },
                                { icon: Wallet, title: '2. Добавьте счета', desc: 'Uzcard, HUMO, наличные — укажите текущий баланс и начните учёт.' },
                                { icon: MessageSquare, title: '3. Пишите, а не заполняйте', desc: '«Потратил 200к в Макро» — AI сам всё поймет и обновит баланс.' }
                            ].map((step, i) => (
                                <div key={i} className="relative flex flex-col items-center text-center">
                                    <div className="w-24 h-24 rounded-full glass border border-white/10 flex items-center justify-center mb-6 relative z-10 bg-[#0A0F1C]">
                                        <step.icon className="w-10 h-10 text-emerald-400" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                                    <p className="text-gray-400 leading-relaxed">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Security */}
            <section className="py-16 relative border-y border-white/5 bg-white/[0.02]">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="flex flex-col items-center justify-center mb-12 text-center">
                        <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center mb-6">
                            <Shield className="w-8 h-8 text-emerald-400" />
                        </div>
                        <h2 className="text-2xl md:text-4xl font-bold mb-4">Безопасность на уровне банка</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="glass p-8 rounded-2xl flex flex-col items-center text-center">
                            <Lock className="w-8 h-8 text-gray-400 mb-4" />
                            <h3 className="text-lg font-bold mb-2">Данные в Узбекистане</h3>
                            <p className="text-gray-400 text-sm">
                                Все персональные данные хранятся на защищенных серверах в РУз в соответствии со ст. 27.1 ЗРУ-547 о персональных данных.
                            </p>
                        </div>
                        <div className="glass p-8 rounded-2xl flex flex-col items-center text-center">
                            <Shield className="w-8 h-8 text-gray-400 mb-4" />
                            <h3 className="text-lg font-bold mb-2">Обезличивание</h3>
                            <p className="text-gray-400 text-sm">
                                Перед любой обработкой ИИ все ФИО, номера банковских карт и персональные идентификаторы удаляются автоматически.
                            </p>
                        </div>
                        <div className="glass p-8 rounded-2xl flex flex-col items-center text-center">
                            <Fingerprint className="w-8 h-8 text-gray-400 mb-4" />
                            <h3 className="text-lg font-bold mb-2">PIN + Биометрия</h3>
                            <p className="text-gray-400 text-sm">
                                Дополнительный уровень защиты при входе через Telegram Mini App с использованием FaceID или TouchID.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tech Stack */}
            <section className="py-16 relative">
                <div className="container mx-auto px-6 max-w-5xl text-center">
                    <h2 className="text-xl font-medium text-gray-400 mb-8 tracking-widest uppercase">Технологии под капотом</h2>
                    <div className="flex flex-wrap justify-center gap-3 mb-8">
                        {['Python', 'FastAPI', 'PostgreSQL', 'React', 'TypeScript', 'Tailwind', 'Claude AI', 'Telegram Bot API', 'Docker'].map((tech, i) => (
                            <span key={i} className="px-4 py-2 rounded-full glass border border-white/5 text-sm font-medium hover:border-emerald-500/30 transition-colors">
                                {tech}
                            </span>
                        ))}
                    </div>
                    <p className="text-sm text-gray-500 max-w-2xl mx-auto">
                        Архитектура: Web-first монолит с единым REST API. Работает как веб-приложение, Telegram Mini App и чат-бот.
                    </p>
                </div>
            </section>

            {/* Team */}
            <section id="team" className="py-24 relative border-t border-white/5 bg-white/[0.02]">
                <div className="container mx-auto px-6 max-w-5xl text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-16">Команда</h2>
                    <div className="flex justify-center">
                        <div className="glass p-6 flex flex-col items-center rounded-2xl w-64 hover:-translate-y-2 transition-transform duration-300">
                            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 mb-4 flex items-center justify-center text-2xl font-bold">
                                AG
                            </div>
                            <h3 className="text-xl font-bold">FinAssist Team</h3>
                            <p className="text-emerald-400 text-sm mb-4">CBU Hackathon 2025</p>
                            <p className="text-gray-400 text-sm">
                                Создаём финансовые инновации для Узбекистана.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Footer */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/40 to-teal-900/20 z-0" />
                <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">Начните контролировать свои финансы сегодня</h2>
                    <p className="text-xl text-emerald-100/80 mb-10">
                        Бесплатно. Без привязки карты. Работает прямо в браузере.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-emerald-900 hover:bg-gray-100 font-bold shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:shadow-[0_0_40px_rgba(255,255,255,0.5)] transition-all flex items-center justify-center gap-2">
                            Открыть FinAssist
                            <ChevronRight className="w-5 h-5" />
                        </button>
                        <button className="w-full sm:w-auto px-8 py-4 rounded-full border-2 border-white hover:bg-white/10 text-white font-bold flex items-center justify-center gap-2 transition-all">
                            <Send className="w-5 h-5" />
                            Запустить в Telegram
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 border-t border-white/10 bg-[#05080f]">
                <div className="container mx-auto px-6 max-w-7xl flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                        <Sparkles className="w-5 h-5 text-emerald-500" />
                        <span className="font-bold text-lg">Fin<span className="text-emerald-500">Assist</span></span>
                    </div>

                    <div className="flex items-center gap-6 text-sm text-gray-400">
                        <a href="#" className="hover:text-emerald-400 transition-colors">GitHub</a>
                        <a href="#" className="hover:text-emerald-400 transition-colors">Telegram Bot</a>
                        <a href="#" className="hover:text-emerald-400 transition-colors">Контакты</a>
                    </div>

                    <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-gray-500">
                        <span>© 2025 FinAssist • CBU Coding Hackathon</span>
                        <span className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full">
                            🇺🇿 Сделано в Узбекистане
                        </span>
                    </div>
                </div>
            </footer>
        </div>
    );
}
