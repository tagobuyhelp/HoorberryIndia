# 🌸 Cosmetics Page (Dynamic-ready) — Hoorberry India

**Meta Title:** Luxury Cosmetics in India | Hoorberry Skincare & Beauty
**Meta Description:** Shop Hoorberry luxury cosmetics — advanced skin brightening creams, premium skincare, and elegant beauty solutions for radiant skin.

---

## H1: Luxury Cosmetics Collection in India

**Intro Paragraph (static):**
At **Hoorberry India**, cosmetics are not just skincare — they are an experience of elegance. Our range is powered by **Glutathione, Kojic Acid, Niacinamide, and Hyaluronic Acid** to ensure visible radiance and hydration. Whether you’re looking for brightening creams, restorative serums, or premium fragrances, each Hoorberry product is **crafted to deliver results with luxury aesthetics**.

---

## Section 1: Dynamic Product Grid

**H2:** Shop Our Best Cosmetics

**Dynamic Area:**

* Pull products from backend (Product model).
* Display as cards:

  * Image (featuredImage)
  * Title
  * Short description (excerpt/shortDescription)
  * Price & discount
  * CTA buttons: *View Details* | *Add to Cart*

**React structure (pseudo-code):**

```jsx
{products.map(product => (
  <ProductCard 
    key={product._id}
    title={product.title}
    image={product.featuredImage}
    shortDescription={product.shortDescription}
    price={product.price}
    discountPrice={product.discountPrice}
    slug={product.slug}
  />
))}
```

---

## Section 2: Categories (static, links to filtered products)

**H2:** Explore by Category

* **Skincare:** Brightening creams, hydrating serums, daily essentials.
  *(CTA: View Skincare)*

* **Makeup:** Luxury lipsticks, foundations, and essentials for timeless looks.
  *(CTA: View Makeup)*

* **Fragrances:** Premium perfumes and mists that last all day.
  *(CTA: View Fragrances)*

*(Each category CTA → `/cosmetics?category=skincare` etc.)*

---

## Section 3: Why Choose Hoorberry Cosmetics? (static)

**H2:** The Hoorberry Promise in Beauty

**Bullets (with icons):**

* 🌟 Powered by clinically proven actives
* 🌿 Gentle & dermatologist-tested
* 🎁 Elegant black & gold packaging
* 🚚 Nationwide delivery, fast & secure
* ✅ Cruelty-free & authentic

---

## Section 4: Dynamic Reviews (optional)

**H2:** Loved By Customers Across India

```jsx
{reviews.map(review => (
  <ReviewCard
    key={review._id}
    user={review.user.name}
    rating={review.rating}
    text={review.body}
  />
))}
```

*(If reviews not ready → fallback with 2–3 static testimonials)*

---

## Section 5: Newsletter Signup (static)

**H2:** Join the Hoorberry Circle
*Get access to new launches, tips, and member-only offers.*

Form: Email input + Subscribe button

---

## SEO Keywords (to keep in copy, headings, meta)

* luxury cosmetics India
* premium skincare India
* skin brightening cream India
* hyaluronic acid serum India
* peptide skincare India

---

## ALT Text (for dynamic product images)

When storing images in DB → keep `altText` field in **Media model**. Example:

* “Hoorberry Celebright Advanced skin brightening cream 20g luxury black box”
* “Luxury hyaluronic acid serum by Hoorberry India”

