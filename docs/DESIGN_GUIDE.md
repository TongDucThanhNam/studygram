# Studygram Design Guide

Tài liệu này hướng dẫn chi tiết cách tái tạo phong cách thị giác "Studygram" (vở chép bài đẹp) cho ứng dụng web.

## 1. Màu sắc (Color Palette)

Hệ màu dựa trên các loại bút highlight pastel và màu giấy tự nhiên.

### Màu nền (Backgrounds)
- **Paper Cream**: `#FFF7EA` (Màu chủ đạo, mô phỏng giấy ngà)
- **Paper White/Card**: `#FFFAF3` (Màu nền cho các card/giấy note)
- **Dot Grid Tint**: `#D7C2A8` (Màu chấm lưới)

### Mực & Văn bản (Ink & Text)
- **Ink Primary**: `#1F2937` (Xanh đen đậm, dùng cho văn bản chính)
- **Ink Secondary**: `#4B5563` (Xám chì, dùng cho văn bản phụ)
- **Accent Rose**: `#BE123C` (Dùng cho tiêu đề nhấn mạnh)
- **Accent Blue**: `#0369A1` (Dùng cho các element trang trí xanh)

### Highlight Pastels
Dùng để tô nền cho text (highlight marker effect).

```css
/* Vàng pastel */
.hl-yellow {
  background: linear-gradient(to top, rgba(255, 245, 157, 0.9) 55%, transparent 55%);
  padding: 0.02em 0.14em;
}

/* Xanh dương pastel */
.hl-blue {
  background: linear-gradient(to top, rgba(179, 229, 252, 0.9) 55%, transparent 55%);
  padding: 0.02em 0.14em;
}

/* Hồng pastel */
.hl-pink {
  background: linear-gradient(to top, rgba(255, 205, 210, 0.9) 55%, transparent 55%);
  padding: 0.02em 0.14em;
}
```

## 2. Typography

Sử dụng kết hợp 3 font chữ để tạo phân cấp thông tin rõ ràng nhưng thủ công.

### Script / Title Font
- **Font**: `Pacifico`
- **Usage**: Tiêu đề lớn (H1), Logo, các từ cần nhấn mạnh cảm xúc.
- **Style H2 (Sunset Vibe)**:
  ```css
  h2 {
    font-family: 'Pacifico', cursive;
    font-weight: 400;
    font-size: clamp(2.1rem, 3.6vw, 2.6rem);
    /* Hiệu ứng màu loang hoàng hôn */
    background: linear-gradient(135deg, #FF6B6B 0%, #FF8E53 100%);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    text-shadow: 2px 2px 4px rgba(255, 107, 107, 0.2);
  }
  ```

### Handwriting / Heading Font
- **Font**: `Mali` (Google Fonts)
- **Usage**: Các tiêu đề phụ (H3, H4, H5), label, caption.
- **Characteristics**: Nét tròn, đều, dễ đọc hơn script.

### Body / Note Font
- **Font**: `Patrick Hand`
- **Usage**: Văn bản nội dung (body paragraph).
- **Characteristics**: Giống chữ viết tay bằng bút bi/bút kim, legibility cao.

## 3. Elements & Components

### Giấy Dot-Grid (Background Texture)
Tạo nền giấy chấm để căn chỉnh layout.
```css
.dot-grid {
  background-image: radial-gradient(#d7c2a8 0.9px, transparent 0.9px);
  background-size: 18px 18px; /* Khoảng cách chấm */
}
```

### Sticky Note (Giấy nhớ)
Mô phỏng giấy note vàng dán lên bảng.
- **Class**: `.sticky-note`
- **Đặc điểm**:
  - Nền vàng nhạt (`#fff9c4`)
  - Shadow đổ bóng nhẹ.
  - Xoay nghiêng ngẫu nhiên (`rotate(-2deg)`).
  - Hover effect: Phóng to nhẹ và xoay thẳng lại.

```css
.sticky-note {
  position: relative;
  background-color: #fff9c4;
  box-shadow: 3px 3px 10px rgba(0,0,0,0.1);
  transform: rotate(-2deg);
  transition: transform 0.3s ease;
}
.sticky-note:hover {
  transform: scale(1.03) rotate(0deg);
  z-index: 10;
}
```

### Washi Tape (Băng dính trang trí)
Dùng để "dán" các tấm ảnh hoặc giấy note.
- **Class**: `.washi-tape`
- **Style**: Trong suốt đơn màu (Minimalist).
```css
.washi-tape {
  position: absolute;
  width: 100px;
  height: 30px;
  background-color: rgba(255, 100, 100, 0.3); /* Đỏ trong suốt */
  opacity: 0.8;
  border-radius: 2px;
  transform: translateX(-50%) rotate(-1deg);
  box-shadow: 0 1px 2px rgba(0,0,0,0.1);
}
```

### Hand Card (Thẻ vẽ tay)
Các khối nội dung có viền đậm, không đều.
- **Class**: `.hand-card`
- **Style**:
  - Border: `3px solid #0f172a` (Nét đậm)
  - Border Radius: `255px 15px 225px 15px / 15px 225px 15px 255px` (Bo góc méo tạo cảm giác tự nhiên).
  - Box Shadow (Hard/Retro): `6px 6px 0px #000000`.

### Scribble Underline (Gạch chân nguệch ngoạc)
Dùng SVG background image để tạo nét gạch chân không thẳng hàng.
- **Class**: `.scribble-underline`

## 4. Layout Principles (Nguyên tắc bố cục)
1.  **Analog Vibes**: Tránh các đường thẳng tắp hoàn hảo. Sử dụng góc xoay (`rotate`) nhẹ (1-3 độ) cho các elements.
2.  **Layers**: Tạo chiều sâu bằng cách xếp lớp (Z-index): Nền giấy -> Washi Tape -> Ảnh/Note -> Pin/Sticker.
3.  **Whitespace**: Giữ khoảng trắng rộng rãi, giống như một trang vở sạch đẹp.
