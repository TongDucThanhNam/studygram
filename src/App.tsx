import heroImage from "./assets/image.jpg";

const palette = [
	{ name: "Paper Cream", hex: "#FFF7EA" },
	{ name: "Highlighter Peach", hex: "#FFD7BA" },
	{ name: "Blush Pink", hex: "#FADAE4" },
	{ name: "Mint", hex: "#DFF4EA" },
	{ name: "Sky", hex: "#D8E9FF" },
	{ name: "Ink", hex: "#1F2937" },
];

const steps = [
	{
		num: "01",
		title: "Xác định mục tiêu",
		body: "Trang này để ôn gì? Bullet keypoint hay flashcard? Viết mục tiêu lên đầu trang để giữ focus.",
		color: "bg-amber-200 text-amber-900",
	},
	{
		num: "02",
		title: "Chọn palette",
		body: "2–3 màu pastel cố định + màu mực đậm. Đừng đổi màu mỗi đoạn kẻo loạn.",
		color: "bg-rose-200 text-rose-900",
	},
	{
		num: "03",
		title: "Kẻ layout",
		body: "Phác nhanh block heading, body, hình, quote. Xoay nhẹ 1–2 block để có cảm giác handmade.",
		color: "bg-sky-200 text-sky-900",
	},
	{
		num: "04",
		title: "Viết + highlight",
		body: "Viết nội dung trước, highlight sau. Dùng 1 màu highlight cho keyword chính để mắt đỡ mệt.",
		color: "bg-emerald-200 text-emerald-900",
	},
	{
		num: "05",
		title: "Doodle + tape",
		body: "Thêm tape, sticker, doodle nhỏ dẫn mắt. Ít mà chất, không rải sticker vô tội vạ.",
		color: "bg-violet-200 text-violet-900",
	},
];

const pillars = [
	{
		letter: "A",
		title: "Chất liệu & nền",
		body: "Dot-grid, kẻ ô, kraft paper. Tránh trắng tinh, thêm grain nhẹ để giống giấy thật.",
		bg: "from-amber-300 to-rose-300",
	},
	{
		letter: "B",
		title: "Bố cục",
		body: "Organized chaos: có lưới, có xoay lệch 1–3°, block rõ ràng, khoảng thở rộng.",
		bg: "from-sky-300 to-emerald-300",
	},
	{
		letter: "C",
		title: "Typography",
		body: "Calligraphy cho H1, handwriting cho H2, rounded cho body. Thêm underline marker và chữ in hoa nhỏ.",
		bg: "from-rose-300 to-violet-300",
	},
	{
		letter: "D",
		title: "Màu & ánh sáng",
		body: "Pastel ấm, ánh sáng diffuse như cửa sổ. Shadow mềm, tán rộng, không cứng.",
		bg: "from-emerald-300 to-amber-300",
	},
];

export default function App() {
	return (
		<div className="min-h-screen w-full text-ink">
			<header className="sticky top-0 z-30 border-b border-slate-200/80 bg-[#fff7ea]/90 backdrop-blur">
				<div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
					<div className="flex items-center gap-3">
						<div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-linear-to-br from-accent-yellow via-accent-pink to-accent-blue text-sm font-bold uppercase tracking-[0.16em] text-ink shadow-md">
							sg
						</div>
						<div className="leading-tight">
							<p className="font-display text-2xl font-semibold">Studygram</p>
							<p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
								Creative & Colorful Notes
							</p>
						</div>
					</div>
					<nav className="hidden items-center gap-2 text-xs font-semibold text-slate-700 sm:flex">
						{[
							{ href: "#hero", label: "Hero" },
							{ href: "#pillars", label: "4 trụ cột" },
							{ href: "#palette", label: "Palette" },
							{ href: "#steps", label: "Checklist" },
						].map((item, i) => (
							<a
								key={item.href}
								href={item.href}
								className={`font-note inline-flex items-center rounded-lg px-3 py-1.5 shadow-sm ring-1 ring-slate-200/80 bg-white/90 hover:-translate-y-0.5 transition ${i % 2 === 0 ? "rotate-[-2deg]" : "rotate-[2deg]"
									}`}
							>
								<span className="text-[11px] uppercase tracking-[0.18em]">{item.label}</span>
							</a>
						))}
					</nav>
				</div>
			</header>

			<main
				className="mx-auto max-w-6xl px-4 pb-16 pt-8 sm:px-6 lg:px-8 lg:pb-24"
				id="hero"
			>
				<section className="grid gap-8 lg:grid-cols-[1.2fr_0.9fr] lg:items-center">
					<div className="space-y-4">
						<div className="inline-flex items-center gap-2 rounded-full bg-white/85 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-600 shadow-sm ring-1 ring-slate-200/90 backdrop-blur">
							Studygram notebook UI • V0.0.1
						</div>
						<h1 className="max-w-2xl font-hand text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
							Biến kiến thức khô khan thành
							<span className="scribble-underline"> tác phẩm nghệ thuật</span>
						</h1>
						<p className="max-w-xl text-base leading-relaxed text-slate-700">
							Thay vì card corporate, layout này dùng giấy dot-grid, washi tape,
							sticky note, polaroid, shadow diffuse và chữ tay để tái tạo cảm
							giác vở thật.
						</p>
						<div className="flex flex-wrap gap-3 text-xs text-slate-600">
							<span className="rounded-full bg-amber-100/90 px-3 py-1 font-semibold uppercase tracking-[0.16em] text-amber-900 ring-1 ring-amber-200/70">
								Handwritten H1
							</span>
							<span className="rounded-full bg-rose-100/90 px-3 py-1 font-semibold uppercase tracking-[0.16em] text-rose-900 ring-1 ring-rose-200/70">
								Dot-grid paper
							</span>
							<span className="rounded-full bg-sky-100/90 px-3 py-1 font-semibold uppercase tracking-[0.16em] text-sky-900 ring-1 ring-sky-200/70">
								Washi + tape
							</span>
						</div>
					</div>

					{/* Hero right as polaroid */}
					{/* Hero right as polaroid */}
					<div className="relative max-sm:mt-8 max-sm:mb-8">
						<div className="washi-tape z-20"></div>
						<div className="p-3 pb-16 bg-white shadow-xl rotate-2 hover:rotate-1 transition duration-500 rounded-[2px] border border-gray-100 relative z-10">
							<img
								src={heroImage}
								alt="Studygram Vibes"
								className="w-full h-auto rounded-[2px] block aspect-[4/3] object-cover bg-gray-50 grayscale-[10%] hover:grayscale-0 transition"
							/>
							<div className="absolute bottom-5 left-0 right-0 text-center font-hand text-gray-500 text-xl tracking-wider opacity-80 rotate-[-1deg]">
								Trừ khi bạn dùng Studygram 😏
							</div>
						</div>
					</div>
				</section>

				<section id="pillars" className="mt-12">
					<div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
						<div>
							<p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
								Visual identity
							</p>
							<h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
								4 trụ cột Studygram “đúng bản sắc”
							</h2>
							<p className="max-w-2xl text-sm text-slate-700">
								Xây nền analog, giữ lưới nhưng cho phép lệch nhẹ, ưu tiên
								handwriting và highlight thật. Mỗi trụ cột là một lớp của trang
								vở.
							</p>
						</div>
						<div className="relative rounded-xl bg-rose-50 px-3 py-2 text-[11px] font-semibold text-rose-900 shadow-sm ring-1 ring-rose-200/70">
							<span className="absolute -left-4 -top-3 rotate-[-6deg] rounded bg-amber-200 px-2 py-0.5 text-[10px] uppercase tracking-[0.14em] text-amber-900 shadow">
								Tip
							</span>
							Đừng dùng quá 3 font, và luôn có 1 màu mực đậm để neo mắt.
						</div>
					</div>

					<div className="mt-6 grid gap-4 md:grid-cols-2">
						{pillars.map((item) => (
							<article
								key={item.letter}
								className="hand-card bg-dot-grid relative overflow-hidden p-5"
							>
								<span className="hand-card-inner"></span>
								<div className="pointer-events-none absolute -right-12 top-6 h-24 w-24 rotate-6 rounded-3xl bg-linear-to-br from-amber-100/70 via-pink-100/60 to-sky-100/70 opacity-80 blur-xl"></div>
								<div className="hand-card-content">
									<header className="relative flex items-start gap-3">
										<div
											className={`flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br ${item.bg} text-sm font-semibold text-ink shadow-md`}
										>
											{item.letter}
										</div>
										<div className="space-y-1">
											<h3 className="font-display text-xl font-semibold text-ink">
												{item.title}
											</h3>
											<p className="text-sm text-slate-700">{item.body}</p>
										</div>
									</header>
									<div className="relative mt-4 grid gap-3 sm:grid-cols-[1.1fr,1fr]">
										<div className="rounded-2xl bg-white/90 p-3 text-[12px] text-slate-700 shadow-sm ring-1 ring-slate-200/80">
											<p className="font-semibold text-slate-800">
												Ghi chú nhanh
											</p>
											<p className="mt-1 text-[11px] leading-relaxed text-slate-600">
												• Thêm texture (dot/kẻ ô). • Xoay block nhẹ. • Underline
												bằng marker pastel.
											</p>
										</div>
										<div className="relative rounded-2xl bg-white/90 p-3 text-[11px] shadow-md ring-1 ring-slate-200/80">
											<div className="absolute right-2 top-2 h-6 w-14 rotate-3 rounded bg-amber-200/70 text-center text-[10px] font-semibold uppercase tracking-[0.14em] text-amber-900 shadow">
												Apply
											</div>
											<ul className="space-y-1 text-slate-700">
												<li>• Dùng 1 góc washi tape để neo block.</li>
												<li>• Chèn doodle mũi tên dẫn mắt.</li>
												<li>• Giữ khoảng thở rộng, text trái.</li>
											</ul>
										</div>
									</div>
								</div>
							</article>
						))}
					</div>
				</section>

				<section id="palette" className="mt-12">
					<div className="flex flex-col gap-2">
						<p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
							Palette • bút nhớ + mực
						</p>
						<h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
							Pastel ấm, không sterile
						</h2>
						<p className="max-w-2xl text-sm text-slate-700">
							Màu thiên giấy, ngả kem. Highlighter nhẹ, mực đậm để giữ tương
							phản. Tránh xanh xám lạnh kiểu dashboard.
						</p>
					</div>

					<div className="mt-5 grid gap-3 sm:grid-cols-3">
						<div className="rounded-2xl bg-white/90 p-4 shadow-sm ring-1 ring-slate-200/80">
							<p className="text-sm font-semibold text-ink">Color chips</p>
							<div className="mt-3 grid grid-cols-3 gap-3">
								{palette.map((c) => (
									<div
										key={c.hex}
										className="flex flex-col items-center gap-1 text-[11px] text-slate-600"
									>
										<div
											className="h-12 w-12 rounded-full shadow-sm ring-1 ring-slate-200/70"
											style={{ backgroundColor: c.hex }}
										></div>
										<span className="font-semibold text-slate-700">
											{c.name}
										</span>
										<span className="text-[10px] text-slate-500">{c.hex}</span>
									</div>
								))}
							</div>
						</div>
						<div className="polaroid relative rounded-2xl p-4">
							<p className="font-display text-2xl font-semibold">
								Ink & highlight
							</p>
							<ul className="mt-2 space-y-1 text-sm text-slate-700">
								<li>• Mực: #1F2937 hoặc nâu đậm, tạo neo tương phản.</li>
								<li>• Highlight: vàng/peach/mint nhạt, phủ lên keyword.</li>
								<li>
									• Outline thủ công: dùng rough stroke/roughjs hoặc border dash
									nhẹ.
								</li>
							</ul>
						</div>
					</div>
				</section>

				<section id="typo" className="mt-12">
					<h2 className="uppercase font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl mb-4">
						Typography mẫu
					</h2>
					<div className="relative overflow-hidden rounded-2xl border border-slate-200/70 bg-[#fffaf3] p-4 shadow-inner">
						<div className="sg-typography space-y-3 pt-4">
							<fieldset className="hand-fieldset">
								<legend className="hand-legend">
									<span className="legend-icon-box">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="18"
											height="18"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										>
											<title>Studygram layout summary</title>
											<path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
											<path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
										</svg>
									</span>
									<span className="legend-title">
										Tóm tắt về layout Studygram
									</span>
								</legend>
								<div className="hand-content">
									<p>
										Có 4 trụ cột: chất liệu giấy, bố cục lệch nhẹ nhưng có lưới,
										typography tay + marker, màu pastel ấm. Kết hợp sticky,
										washi, polaroid và hand-card để tạo lớp.
									</p>
									<p className="sg-subheading">
										Tip: giữ border đậm, shadow nhẹ và nhiều texture.
									</p>
								</div>
							</fieldset>

							<p className="text-[15px] leading-7 text-slate-700">
								Đây là ví dụ chữ: <strong>heading tay</strong>,{" "}
								<span className="sg-subheading">subheading uppercase đỏ</span>,
								body tròn trịa dễ đọc trên nền dot-grid, có{" "}
								<em>nhấn nghiêng</em>, <code>code</code> và{" "}
								<span className="hl-yellow">highlight vàng</span>.
							</p>

							<h1 className=" sg-ink">Tiêu đề cấp 1</h1>
							<h2>Tiêu đề cấp 2</h2>
							<h3>Tiêu đề cấp 3</h3>
							<h4>Tiêu đề cấp 4</h4>
							<h5>Tiêu đề cấp 5</h5>
							<h6>Tiêu đề cấp 6</h6>
							<p className="text-[13px] text-slate-600">
								Dùng <span className="hl-blue">highlight xanh</span> cho
								link/definition, <span className="hl-pink">highlight hồng</span>{" "}
								cho cảnh báo nhẹ, và{" "}
								<strong className="scribble-underline">
									mix underline scribble
								</strong>{" "}
								để tạo nhấn thủ công.
							</p>
						</div>
						<div className="pointer-events-none absolute inset-0 dot-grid opacity-60"></div>
					</div>
				</section>

				<section id="sticky-notes" className="mt-12">
					<div className="flex flex-col gap-2">
						<p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
							Sticky note + washi tape
						</p>
						<h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
							Ghi chú nhanh kiểu giấy dán
						</h2>
						<p className="max-w-2xl text-sm text-slate-700">
							Dùng cho tip, checklist, hoặc menu. Có băng dính đỏ nhạt, xoay
							lệch, hover bay nhẹ.
						</p>
					</div>
					<div className="mt-5 grid gap-4 sm:grid-cols-3">
						<div className="sticky-note rotate-left">
							<h3 className="font-display text-lg font-semibold text-rose-700">
								Todo List 📌
							</h3>
							<ul className="mt-2 list-disc pl-4 text-sm text-slate-700">
								<li>Học ReactJS</li>
								<li>Tập thể dục</li>
								<li>Mua cà phê</li>
							</ul>
						</div>
						<div className="sticky-note note-blue rotate-right tape-cross">
							<h3 className="font-display text-lg font-semibold text-sky-700">
								Ý tưởng 💡
							</h3>
							<p className="mt-2 text-sm text-slate-700">
								Thiết kế UI vở học sinh với Tailwind v4, dot-grid, highlight
								vàng.
							</p>
						</div>
						<div className="sticky-note note-pink rotate-left">
							<h3 className="font-display text-lg font-semibold text-rose-700">
								Đừng quên! ❤️
							</h3>
							<p className="mt-2 text-sm text-slate-700">
								Gọi điện về cho mẹ lúc 8h tối.
							</p>
						</div>
					</div>
				</section>

				<section id="hand-card" className="mt-12">
					<div className="flex flex-col gap-2">
						<p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
							Hand card méo viền
						</p>
						<h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
							Card vẽ tay, viền đậm và nền dot-grid
						</h2>
						<p className="max-w-2xl text-sm text-slate-700">
							Dùng cho quote, callout, hoặc khung nội dung đặc biệt. Viền đậm
							3px, shadow đen lệch, viền nét đứt bên trong.
						</p>
					</div>
					<div className="mt-5 grid gap-4 sm:grid-cols-2">
						<div className="hand-card bg-dot-grid p-5">
							<span className="hand-card-inner"></span>
							<div className="hand-card-content space-y-2">
								<p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">
									Studygram note
								</p>
								<h3 className="font-display text-2xl text-ink">
									Checklist layout
								</h3>
								<ul className="list-disc pl-5 text-sm text-slate-700">
									<li>Heading Pacifico + underline scribble</li>
									<li>Highlight vàng/mint cho keyword</li>
									<li>Washi tape hoặc sticker neo góc</li>
								</ul>
							</div>
						</div>
						<div
							className="hand-card p-5"
							style={{
								boxShadow: "6px 6px 0px #ef4444",
								borderColor: "#ef4444",
							}}
						>
							<span className="hand-card-inner"></span>
							<div className="hand-card-content space-y-2">
								<p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-rose-600">
									Quote
								</p>
								<p className="font-display text-xl text-ink scribble-underline sg-ink">
									“Make studying cute enough that you want to come back.”
								</p>
								<p className="text-sm text-slate-700">
									Ghi chú: giữ khoảng thở, text trái, shadow mềm và màu mực đậm
									để đọc rõ.
								</p>
							</div>
						</div>
					</div>
				</section>

				<section id="steps" className="mt-12">
					<div className="flex flex-col gap-2">
						<p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
							Quy trình 5 bước
						</p>
						<h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
							Checklist biến layout cứng thành Studygram thật
						</h2>
					</div>
					<div className="mt-5 grid gap-4 md:grid-cols-5">
						{steps.map((step) => (
							<div
								key={step.num}
								className="hand-card relative flex flex-col p-3 text-sm"
							>
								<span className="hand-card-inner"></span>
								<div className="hand-card-content space-y-2">
									<div className="flex items-center justify-between">
										<span
											className={`h-7 w-7 rounded-full text-center text-[11px] font-semibold shadow-sm ${step.color}`}
										>
											{step.num}
										</span>
										<span className="text-[10px] uppercase tracking-[0.18em] text-slate-400">
											{step.title}
										</span>
									</div>
									<p className="text-slate-700">{step.body}</p>
								</div>
							</div>
						))}
					</div>
				</section>
			</main>

			<footer className="border-t border-slate-200/70 bg-[#fff7ea]/90 py-6 text-center text-[11px] text-slate-600 backdrop-blur">
				<div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 sm:flex-row sm:px-6 lg:px-8">
					<p>
						Bản tái thiết kế Studygram: giấy ấm, chữ tay, highlight, tape &
						doodle.
					</p>
					<p className="text-[10px] text-slate-500">
						Gợi ý: in layout này thành template để viết tay hoặc dùng làm
						guideline trong Figma.
					</p>
				</div>
			</footer>
		</div>
	);
}
