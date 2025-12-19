import Image from "next/image";
import Link from "next/link";

const features = [
  {
    title: "Üretken Yapay Zeka Altyapısı",
    description:
      "Kurumsal veri kaynaklarınızı tek bir semantik katmanda birleştirerek, güvenilir ve izlenebilir yapay zeka çıktıları üretir.",
  },
  {
    title: "Gerçek Zamanlı Karar Motoru",
    description:
      "Finansal, operasyonel ve müşteri verilerini eş zamanlı olarak işleyip, yönetim ekiplerine anlık aksiyon önerileri sunar.",
  },
  {
    title: "Sektörel Adaptasyon",
    description:
      "Bankacılık, perakende ve enerji dikeyleri için özelleştirilmiş dil modelleri sayesinde 12 haftadan kısa sürede canlıya çıkın.",
  },
];

const metrics = [
  { label: "Pilot Kurumlarda Tasarruf", value: "₺38M" },
  { label: "Karar Döngüsünde Kısalma", value: "7.4x" },
  { label: "Yönetilen Veri Noktası", value: "2.1B" },
  { label: "Net Promoter Skoru", value: "72" },
];

const milestones = [
  {
    period: "Q1 2024",
    title: "Çekirdek Platform Lansmanı",
    detail:
      "Temel veri orkestrasyon motoru ve güvenlik katmanları MVP olarak yayınlandı.",
  },
  {
    period: "Q3 2024",
    title: "Kurumsal Pilotlar",
    detail:
      "Bölgesel banka ve enerji şirketiyle canlı pilot projeler tamamlandı.",
  },
  {
    period: "Q2 2025",
    title: "Gelirli Büyüme",
    detail:
      "Tekrarlayan gelir modeline geçiş ve 4 yeni sektör için modül yol haritası.",
  },
];

const team = [
  {
    name: "Elif Kaya",
    title: "Kurucu Ortak & CEO",
    bio: "Ex-McKinsey, MIT Yapay Zeka Lab araştırmacısı. Kurumsal dönüşüm projelerinde 12 yıllık deneyim.",
  },
  {
    name: "Dr. Cem Arslan",
    title: "Kurucu Ortak & CTO",
    bio: "Google Brain & DeepMind geçmişli. Bilkent ODTÜ ortak lisans, dağıtık sistemler uzmanı.",
  },
  {
    name: "Derya Aksoy",
    title: "CPO",
    bio: "SAP ve UiPath’te ürün liderliği yaptı. AI ürünlerinde ölçeklenebilirlik ve mevzuata uyum uzmanı.",
  },
];

const faqs = [
  {
    question: "Gelir modeliniz nedir?",
    answer:
      "Kurumsal müşteriler için kullanım bazlı abonelik (ARR) modeli kurguladık. Ortalama sözleşme büyüklüğü ₺4.2M ve yıllık yenileme oranı %88 hedefleniyor.",
  },
  {
    question: "Nasıl ölçekleniyorsunuz?",
    answer:
      "Modüler bilgi çekirdekleri sayesinde her sektöre özgü modelleri 6 hafta içinde devreye alıyoruz. Ağırlıklı olarak partner kanallarıyla büyüyoruz.",
  },
  {
    question: "Veri güvenliği nasıl sağlanıyor?",
    answer:
      "Veriler kurumsal sınırlar içinde kalıyor, müşteri ortamında izole kubernetes kümelerinde çalışıyoruz. Tüm süreçler ISO 27001 & GDPR uyumlu.",
  },
];

const investors = [
  "Kurumsal pilot anlaşmaları için 18 aylık çalışma sermayesi",
  "Ürün ekibini 12 kişiden 26 kişiye çıkarmak",
  "Avrupa pazarında regülasyon uyumluluğu ve satış operasyonu",
];

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-x-0 top-[-20rem] h-[40rem] bg-[radial-gradient(circle_at_top,_rgba(96,165,250,0.35)_0%,_rgba(15,23,42,0.1)_55%,_transparent_70%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(30,41,59,0.8)_0%,rgba(15,118,110,0.1)_40%,rgba(59,130,246,0.15)_100%)] mix-blend-overlay" />
      <div className="relative z-10">
        <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-8">
          <Link href="/" className="flex items-center gap-3 text-slate-100">
            <Image
              src="/ai-ulu-mark.svg"
              alt="AI-ULU logo"
              width={40}
              height={40}
              priority
            />
            <span className="text-xl font-semibold tracking-tight">
              AI-ULU
            </span>
          </Link>
          <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
            <a href="#product" className="transition hover:text-sky-300">
              Ürün
            </a>
            <a href="#traction" className="transition hover:text-sky-300">
              Çekiş
            </a>
            <a href="#team" className="transition hover:text-sky-300">
              Ekip
            </a>
            <a href="#investors" className="transition hover:text-sky-300">
              Yatırım
            </a>
            <a
              href="#contact"
              className="rounded-full border border-sky-400/60 px-5 py-2 text-sky-200 transition hover:bg-sky-500/10"
            >
              Demo Talep Et
            </a>
          </nav>
        </header>

        <main className="mx-auto flex w-full max-w-6xl flex-col gap-24 px-6 pb-28 pt-10 sm:pt-20">
          <section className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]" id="hero">
            <div className="space-y-8">
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-4 py-1 text-xs uppercase tracking-[0.32em] text-sky-300">
                AI Orkestrasyon Platformu
              </span>
              <h1 className="text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
                Kurumsal karar süreçlerini yapay zeka ile uçtan uca
                dönüştürüyoruz.
              </h1>
              <p className="max-w-xl text-lg leading-relaxed text-slate-300">
                AI-ULU, kritik veri kaynaklarını anlamlandıran ve ekiplerinizin
                güvenebileceği öngörüler üreten yapay zeka işletim sistemi.
                Pilot müşterilerimizde 12 haftada ROI getirip yatırımcılarımıza
                ölçeklenebilir ve tekrarlanabilir bir büyüme yolu sunuyoruz.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#investors"
                  className="rounded-full bg-sky-400 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-slate-900 transition hover:bg-sky-300"
                >
                  Yatırımcı Paketi
                </a>
                <a
                  href="#traction"
                  className="rounded-full border border-slate-600 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-slate-300 transition hover:border-sky-400/80 hover:text-white"
                >
                  Kanıtlanmış Çekiş
                </a>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-3xl border border-slate-800/70 bg-slate-900/60 p-6 shadow-[0_40px_120px_-60px_rgba(56,189,248,0.6)] backdrop-blur">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-400">
                  Gerçek Zamanlı Komuta Merkezi
                </p>
                <span className="rounded-full bg-sky-500/20 px-3 py-1 text-xs font-semibold text-sky-200">
                  Canlı
                </span>
              </div>
              <div className="mt-6 space-y-6">
                <div className="grid gap-2 rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
                  <p className="text-sm font-medium text-slate-400">
                    Tahmin Edilen Talep
                  </p>
                  <p className="text-3xl font-semibold text-white">
                    %+18,6 trend yukarı
                  </p>
                  <p className="text-xs text-slate-500">
                    42 opsiyon senaryosu senkronize edildi, tavsiye edilen
                    aksiyon: üretim +12%.
                  </p>
                </div>
                <div className="grid gap-2 rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
                  <p className="text-sm font-medium text-slate-400">
                    Risk Yönetimi
                  </p>
                  <p className="text-3xl font-semibold text-white">
                    %96,4 güven skoru
                  </p>
                  <p className="text-xs text-slate-500">
                    Finans departmanında 12M ₺ nakit serbest bırakıldı, müşteri
                    kaybı %4&apos;ten %1,2&apos;ye düştü.
                  </p>
                </div>
                <p className="text-sm text-slate-500">
                  Tüm karar önerileri izlenebilir, açıklanabilir ve uyumluluk
                  panelleriyle entegre.
                </p>
              </div>
            </div>
          </section>

          <section
            id="product"
            className="grid gap-10 rounded-3xl border border-slate-800/60 bg-slate-900/50 p-10 backdrop-blur"
          >
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-3xl font-semibold text-white">
                  Ürün mimarisini yatırımcı şeffaflığıyla paylaşıyoruz
                </h2>
                <p className="mt-2 max-w-xl text-base text-slate-300">
                  AI-ULU, veri entegrasyonundan yönetici panellerine kadar her
                  katmanda farklılaşan bir altyapı sunar. İstemci ortamında
                  konuşlanır, çoklu veri merkezleri için aktif-aktif çalışır.
                </p>
              </div>
              <a
                href="mailto:invest@ai-ulu.com?subject=AI-ULU%20Investor%20Brief%20Talebi"
                className="inline-flex items-center gap-2 rounded-full border border-sky-500/40 px-5 py-3 text-sm font-semibold text-sky-200 transition hover:border-sky-300 hover:text-white"
              >
                Teknik Paket Talep Et
                <span aria-hidden>↗</span>
              </a>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6"
                >
                  <h3 className="text-lg font-semibold text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section
            id="traction"
            className="grid gap-10 rounded-3xl border border-slate-800/60 bg-slate-900/40 p-10 backdrop-blur"
          >
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h2 className="text-3xl font-semibold text-white">
                  Kanıtlanmış çekiş ve hızlanan büyüme eğrisi
                </h2>
                <p className="mt-3 max-w-xl text-base text-slate-300">
                  Stratejik pilotlarımız ile kârlılık ve etkiyi ölçümledik.
                  Şimdi ölçeklenme zamanı: 2025 sonuna kadar 20 kurumsal müşteri
                  hedefleniyor.
                </p>
              </div>
              <div className="grid shrink-0 gap-3">
                <span className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-400">
                  KPI
                </span>
                <div className="grid gap-4 sm:grid-cols-2">
                  {metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="rounded-2xl border border-slate-800 bg-slate-950/80 px-5 py-4"
                    >
                      <p className="text-2xl font-semibold text-white">
                        {metric.value}
                      </p>
                      <p className="text-xs uppercase tracking-wide text-slate-500">
                        {metric.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {milestones.map((milestone) => (
                <div
                  key={milestone.period}
                  className="flex flex-col gap-3 rounded-2xl border border-slate-800 bg-slate-950/80 p-6"
                >
                  <span className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                    {milestone.period}
                  </span>
                  <h3 className="text-lg font-semibold text-white">
                    {milestone.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-400">
                    {milestone.detail}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section
            id="investors"
            className="grid gap-10 rounded-3xl border border-slate-800/60 bg-slate-900/40 p-10 backdrop-blur lg:grid-cols-[1.1fr_0.9fr]"
          >
            <div className="space-y-6">
              <span className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-300">
                Aradığımız Yatırım
              </span>
              <h2 className="text-3xl font-semibold text-white">
                8M $ Seri A turu ile Avrupa büyümesini hızlandırıyoruz.
              </h2>
              <p className="text-base text-slate-300">
                Şirket içi gelirimiz ve pilot anlaşmalarımız güçlü bir temel
                yarattı. Yeni yatırım, yüksek marjlı dikeylere açılmak ve
                platformu mevzuata uygun biçimde yaygınlaştırmak için
                kullanılacak.
              </p>
              <div className="grid gap-4">
                {investors.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-slate-800 bg-slate-950/70 p-4"
                  >
                    <span className="mt-1 inline-flex h-8 w-8 flex-none items-center justify-center rounded-full bg-sky-500/20 text-sm font-semibold text-sky-200">
                      ✓
                    </span>
                    <p className="text-sm text-slate-300">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid gap-6 rounded-3xl border border-slate-800 bg-slate-950/80 p-8">
              <div>
                <h3 className="text-xl font-semibold text-white">
                  Finansal özet
                </h3>
                <p className="mt-2 text-sm text-slate-400">
                  2024 yılı ARR: ₺29M — Brüt kar marjı: %68 — Yakma oranı:
                  ₺2.4M/ay
                </p>
              </div>
              <div className="grid gap-4 text-sm text-slate-300">
                <div>
                  <span className="font-semibold text-sky-200">
                    Çıkış senaryosu
                  </span>
                  <p className="mt-1 text-slate-400">
                    Orta vadede stratejik satın alma (bankacılık/telekom) veya
                    halka arz opsiyonları hedefleniyor.
                  </p>
                </div>
                <div>
                  <span className="font-semibold text-sky-200">
                    Yatırımcı komitesi
                  </span>
                  <p className="mt-1 text-slate-400">
                    Mevcut yatırımcılar: Pioneer Fund, Boğaziçi Ventures.
                    Stratejik turlar için Avrupa merkezli fintech fonları ile
                    görüşmeler başladı.
                  </p>
                </div>
              </div>
              <Link
                href="mailto:invest@ai-ulu.com"
                className="inline-flex items-center justify-center rounded-full bg-sky-400 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-slate-900 transition hover:bg-sky-300"
              >
                Yatırımcı toplantısı planla
              </Link>
            </div>
          </section>

          <section
            id="team"
            className="grid gap-10 rounded-3xl border border-slate-800/60 bg-slate-900/40 p-10 backdrop-blur"
          >
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <h2 className="text-3xl font-semibold text-white">
                Deneyimli kurucu ekip ve alan uzmanları
              </h2>
              <p className="max-w-2xl text-base text-slate-300">
                Yönetim ekibi, yapay zeka, kurumsal dönüşüm ve ürün ölçekleme
                disiplinlerinin kesişiminde 30+ yıllık kombinasyon tecrübesine
                sahip.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {team.map((member) => (
                <div
                  key={member.name}
                  className="flex flex-col gap-3 rounded-2xl border border-slate-800 bg-slate-950/80 p-6"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-sky-400/40 via-slate-700 to-slate-900" />
                    <div>
                      <p className="text-base font-semibold text-white">
                        {member.name}
                      </p>
                      <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                        {member.title}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-400">{member.bio}</p>
                </div>
              ))}
            </div>
          </section>

          <section
            id="faqs"
            className="grid gap-6 rounded-3xl border border-slate-800/60 bg-slate-900/40 p-10 backdrop-blur"
          >
            <div>
              <h2 className="text-3xl font-semibold text-white">
                Yatırımcıların sık sorduğu sorular
              </h2>
              <p className="mt-2 max-w-2xl text-base text-slate-300">
                Finansal ve teknik derin dalış toplantıları için tüm veri odası
                hazırlıklarımız tamamlandı.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="rounded-2xl border border-slate-800 bg-slate-950/80 p-6"
                >
                  <h3 className="text-lg font-semibold text-white">
                    {faq.question}
                  </h3>
                  <p className="mt-3 text-sm text-slate-400">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>
        </main>

        <footer
          id="contact"
          className="border-t border-slate-800/60 bg-slate-950/80"
        >
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-12 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-slate-100">
                <Image
                  src="/ai-ulu-mark.svg"
                  alt="AI-ULU"
                  width={36}
                  height={36}
                />
                <span className="text-lg font-semibold">AI-ULU</span>
              </div>
              <p className="max-w-lg text-sm text-slate-400">
                Yapay zekayı kritik karar süreçlerinin merkezine taşıyoruz.
                İstanbul, Berlin ve San Francisco ofisleri ile küresel ölçekte
                hizmet veriyoruz.
              </p>
              <div className="grid gap-2 text-sm text-slate-400">
                <a
                  href="mailto:hello@ai-ulu.com"
                  className="transition hover:text-sky-300"
                >
                  hello@ai-ulu.com
                </a>
                <a
                  href="mailto:invest@ai-ulu.com"
                  className="transition hover:text-sky-300"
                >
                  invest@ai-ulu.com
                </a>
              </div>
            </div>
            <form className="grid w-full max-w-lg gap-4 rounded-3xl border border-slate-800 bg-slate-900/70 p-6 backdrop-blur">
              <h3 className="text-xl font-semibold text-white">
                Yatırımcı sunumu için erişim isteyin
              </h3>
              <p className="text-sm text-slate-400">
                Veri odası ve pilot raporları için e-posta adresinizi bırakın,
                24 saat içinde dönüş sağlayalım.
              </p>
              <label className="grid gap-2 text-sm">
                <span className="text-xs uppercase tracking-[0.28em] text-slate-500">
                  Kurumsal E-posta
                </span>
                <input
                  type="email"
                  required
                  placeholder="ad.soyad@şirket.com"
                  className="h-11 rounded-xl border border-slate-700 bg-slate-950/70 px-4 text-sm text-white outline-none transition focus:border-sky-400"
                />
              </label>
              <label className="grid gap-2 text-sm">
                <span className="text-xs uppercase tracking-[0.28em] text-slate-500">
                  Notunuz
                </span>
                <textarea
                  required
                  placeholder="Yatırım süreciniz, zamanlama ve beklentiler..."
                  rows={3}
                  className="rounded-xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none transition focus:border-sky-400"
                />
              </label>
              <button
                type="submit"
                className="h-11 rounded-full bg-sky-400 text-sm font-semibold uppercase tracking-wide text-slate-900 transition hover:bg-sky-300"
              >
                Gönder
              </button>
              <p className="text-xs text-slate-500">
                Form verileri güvenli şekilde saklanır ve yalnızca yatırımcı
                iletişimi için kullanılır.
              </p>
            </form>
          </div>
          <div className="border-t border-slate-800/60">
            <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-6 text-xs text-slate-500 sm:flex-row">
              <p>
                © {new Date().getFullYear()} AI-ULU Teknoloji A.Ş. Tüm hakları
                saklıdır.
              </p>
              <div className="flex items-center gap-6">
                <a href="#product" className="transition hover:text-sky-300">
                  Ürün
                </a>
                <a href="#faqs" className="transition hover:text-sky-300">
                  SSS
                </a>
                <a href="#investors" className="transition hover:text-sky-300">
                  Yatırımcı Paketi
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
