1. **Site Content (SEO-focused copywriting)**
2. **Backend Models + Fields (for future-proof CMS / e-commerce)**
3. **SEO Plan (keywords, on-page structure, technical points)**



# 1. Website Content (SEO Friendly Draft)

### **Homepage**

**Hero Section:**

* Headline: *“Hoorberry India — Luxury Cosmetics & Fashion Redefined”*
* Sub-headline: *“Premium beauty & clothing crafted for elegance, powered by nature & style.”*
* CTA: *Shop Cosmetics* | *Explore Clothing*

**About Teaser:**

* “At Hoorberry, we believe luxury is more than style — it’s an experience. From exclusive cosmetics to designer clothing, we deliver sophistication and quality that sets you apart.”

**Featured Collections:**

* Cosmetics (skin, makeup, fragrance)
* Clothing (luxury wear, daily essentials)

**Why Choose Us (USP section):**

* 🌟 Premium Luxury Look & Feel
* 🌿 Natural & Safe Ingredients (for cosmetics)
* 👗 Fashion-forward Clothing for Modern India
* 🚚 Nationwide Fast Delivery

**SEO Keywords to target:** luxury cosmetics India, premium skincare, designer clothing India, black luxury brand

---

### **Cosmetics Page**

**Title (H1):** Luxury Cosmetics Collection in India
**Intro paragraph:**
“Hoorberry India brings you an exclusive line of **luxury cosmetics** designed with skin-safe, premium ingredients. From radiant skincare to long-lasting makeup, every product delivers elegance with care.”

**Category sections:**

* Skincare (serums, creams, cleansers)
* Makeup (lipstick, foundation, eyeshadow)
* Fragrance (perfumes & body mists)

**SEO Keywords:** luxury cosmetics India, premium skincare online, buy organic makeup India, best perfume brand India

---

### **Clothing Page**

**Title (H1):** Luxury Clothing Collection — Hoorberry India
**Intro paragraph:**
“Our **designer clothing line** blends timeless style with modern comfort. Hoorberry India offers exclusive fashion pieces for those who value elegance in every detail.”

**Category sections:**

* Women’s Wear (dresses, sarees, western wear)
* Men’s Wear (shirts, jackets, blazers)
* Accessories (scarves, belts, ties)

**SEO Keywords:** designer clothing India, luxury apparel online, premium fashion wear India, buy trendy dresses online

---

### **About Page**

**H1:** About Hoorberry India
“Hoorberry India is a **luxury lifestyle brand** combining premium cosmetics with designer fashion. Our mission is to provide customers with **world-class beauty products and elegant apparel**, backed by quality, authenticity, and trust.”

**SEO Keywords:** about Hoorberry India, luxury fashion brand India, premium cosmetics company



### **Contact Page**

**H1:** Contact Hoorberry India

* Business Email: [contact@hoorberryindia.com](mailto:contact@hoorberryindia.com)
* Customer Care: +91 9147100907
* Contact Form (name, email, subject, message)

**SEO Keywords:** contact luxury brand India, Hoorberry customer service, Hoorberry India support

---

# 2. Backend Models (Future CMS / E-commerce)

If you’re building with **React + Node.js (Express) + MongoDB**, here’s a **backend schema plan**:

### **User Model**

* `id` (UUID / ObjectId)
* `name`
* `email` (unique, indexed)
* `passwordHash`
* `role` (customer, admin)
* `createdAt`

### **Product Model**

* `id`
* `title` (string, SEO-friendly, slug)
* `description` (rich text, HTML allowed)
* `category` (cosmetics, clothing, accessories)
* `subCategory` (e.g., skincare, makeup, fragrance)
* `price` (number)
* `discountPrice` (optional)
* `sku` (string)
* `stock` (number)
* `images` (\[array of URLs])
* `tags` (array, SEO keywords)
* `metaTitle` (SEO field)
* `metaDescription` (SEO field)
* `slug` (auto-generated from title for clean URL)
* `createdAt`, `updatedAt`

### **Category Model**

* `id`
* `name` (e.g., Cosmetics, Clothing)
* `slug`
* `description`
* `image` (for banner)

### **Order Model**

* `id`
* `userId`
* `products` (array of productId + quantity)
* `totalPrice`
* `paymentStatus` (pending, paid, failed)
* `shippingStatus` (processing, shipped, delivered)
* `createdAt`

### **Blog/SEO Model** (optional for SEO)

* `id`
* `title` (SEO optimized)
* `slug`
* `content` (HTML)
* `tags` (keywords)
* `metaTitle`
* `metaDescription`
* `createdAt`

---

# 3. SEO Plan (Strong & Structured)

✅ **On-page SEO**

* Each page: 1x H1 + 2–3x H2 with targeted keywords
* Meta title (60 chars max) + Meta description (155 chars)
* SEO-friendly slugs:

  * `/cosmetics/luxury-skincare-serum`
  * `/clothing/designer-women-dress`

✅ **Technical SEO**

* Generate sitemap.xml automatically
* Add robots.txt
* Mobile-first responsive design
* Image alt tags (with keywords)

✅ **Content SEO**

* Blog section for organic traffic:

  * “Top 10 Luxury Cosmetics in India 2025”
  * “How to Style Designer Clothing for Every Occasion”
  * “Why Premium Skincare is Worth It”

✅ **Off-page SEO**

* Build backlinks from fashion/cosmetic blogs
* Guest posting on beauty/fashion platforms
* Social sharing via Instagram, Pinterest, YouTube


