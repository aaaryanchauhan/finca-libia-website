# Website Content Changes Log

This folder (`changes/`) documents all content updates made to the Finca Libia website.
You can use this reference to apply the exact same text corrections to another website or repository.

## Summary of Changes

1. **Staffing & Services Corrections**:
   - **Removed**: References to "chef", "private chef service", "butler", "24/7 butler service", and "24/7 private staff".
   - **Added/Updated**: Specified that services include **cleaning services** and **grounds keeper / groundskeeping services** during standard hours (not 24/7).

2. **Pool Terminology Corrections**:
   - **Removed**: All references to "infinity pool".
   - **Updated**: Standardized to simply **"pool"** or **"heated pool"**.

3. **Room Names Renaming**:
   - **The Gold Room (Grand Master)** -> **Grey Room** (`GREY ROOM`)
   - **The Grey Room (Garden Suite)** -> **Gold Room** (`GOLD ROOM`)
   - **Valley View Master Suite** -> **Black Room** (`BLACK ROOM`)
   - **Courtyard Sanctuary Suite** -> **Green Guest Room** (`GREEN GUEST ROOM`)
   - **The Black Room (Deluxe Suite)** -> **Black Guest Room** (`BLACK GUEST ROOM`)
   - **Guest Wing Suite / Garden Suite** -> **Guest House** (`GUEST HOUSE`)

4. **Grey Room Features Update**:
   - **Removed**: Jacuzzi / open-air Jacuzzi.
   - **Added**: Private Balcony and Steam Room Shower.

5. **Gold Room Features Update**:
   - **Removed**: Direct garden access, private garden patio seating, and double stone vanity.
   - **Added**: Private Balcony and Soaking Bathtub.

6. **Black Room Features Update**:
   - **Removed**: Custom cedar vanity and generic ensuite bath.
   - **Added**: Steam Shower.

7. **Bed Configurations Update**:
   - **Grey Room**, **Gold Room**, **Black Room**, and **Guest House**: King Sized Bed (`King Bed`).
   - **Green Guest Room** and **Black Guest Room**: Queen Size Bed with Trundle (`Queen Bed with Trundle`).

8. **Guest Rooms Key Features**:
   - **Green Guest Room & Black Guest Room**: Removed key feature bullet lists (`highlights`).
   - **Guest House**: Updated to **King Bed**; removed library lounge and writing desk references; added key features: **Fireplace**, **Full Kitchen**, **TV**, and **Private bathroom with shower**.

9. **Curated Amenities - Recreation Category**:
   - **Added**: **Half Basketball Court** and **Outdoor Children Activities**.

10. **Curated Amenities - Culinary Category**:
   - **Removed**: Wine cellar and outside asado.
   - **Added**: **Grill Station** and **Large Pizza Oven**.

11. **Curated Amenities - Grounds Category**:
   - **Updated**: Rewrote "Organic Herb & Fruit Gardens" as **"Organic Herb Garden"**.
   - **Removed**: "Private Hiking Trails & Orchards".

12. **Curated Amenities - Services Category**:
   - **Removed**: Entire "Service" / "Services" category from Curated Amenities.

13. **Curated Amenities - Technology Category**:
   - **Removed**: "Smart Room Temperature Control", "EV SUV Charging Station", and "Keyless Smart Entry System".

---

## Detailed File-by-File Changes

### 1. `website/src/components/Hero.tsx`
- **Location**: Hero Section Subtitle (Line ~76)
- **Original Text**:
  > `A private 3.5-acre mountain sanctuary in the Medellín valley. Modernist architecture, 6 master suites, 24/7 private butler & chef service, and complete seclusion.`
- **Updated Text**:
  > `A private 3.5-acre mountain sanctuary in the Medellín valley. Modernist architecture, 6 master suites, cleaning & grounds keeper services, and complete seclusion.`

---

### 2. `website/src/components/DigitalTourBanner.tsx`
- **Location**: Banner description (Line ~24)
- **Original Text**:
  > `Experience all 18 curated estate stops, from the grand stone entrance and speakeasy bar to the 25m heated infinity pool and Finnish sauna.`
- **Updated Text**:
  > `Experience all 18 curated estate stops, from the grand stone entrance and speakeasy bar to the 25m heated pool and Finnish sauna.`

---

### 3. `website/src/components/StorySection.tsx`
- **Location**: Countryside Architecture section paragraph (Line ~41)
- **Original Text**:
  > `From the heated infinity pool overlooking the valley to the private Finnish cedar sauna, cold plunge, and private staff—every space is curated to provide an effortless luxury retreat.`
- **Updated Text**:
  > `From the heated pool overlooking the valley to the private Finnish cedar sauna, cold plunge, and cleaning and groundskeeping services—every space is curated to provide an effortless luxury retreat.`

---

### 4. `website/src/components/EstateAmenities.tsx`
- **Location**: Staff CTA Banner (Lines ~77-80)
- **Original Text**:
  > `Experience Finca Libia with Full Private Staff`
  > `Daily housekeeping, private chef service, butler service, estate manager, and dedicated concierge included with every stay.`
- **Updated Text**:
  > `Experience Finca Libia in Complete Serenity`
  > `Cleaning services, groundskeeping, estate manager, and dedicated concierge included with every stay.`

---

### 5. `website/src/components/RatesCalculatorSection.tsx`
- **Location**: What's Included list (Lines ~89-90)
- **Original Text**:
  > `24/7 Butler & Chef Staff`
  > `Daily Housekeeping`
- **Updated Text**:
  > `Cleaning & Grounds Keeper Services`
  > `Estate Manager & Concierge`

---

### 6. `website/src/components/WhatThisPlaceOffersSection.tsx`
- **Location**: Categories Grid
- **Updated Items**:
  - **Recreation**: Added `Half Basketball Court` and `Outdoor Children Activities`.
  - **Culinary**: Removed `Temperature Controlled Wine Cellar` and `Outdoor Asado & Grill Station`; added `Grill Station` and `Large Pizza Oven`.
  - **Grounds**: Rewrote `Organic Herb & Fruit Gardens` to `Organic Herb Garden`; removed `Private Hiking Trails & Orchards`.
  - **Service**: Entire `Service` category completely removed.
  - **Technology**: Removed `Smart Room Temperature Control`, `EV SUV Charging Station`, and `Keyless Smart Entry System`.

---

### 7. `website/src/components/EstateMapSection.tsx`
- **Location**: Interactive Map Pool & Suite Nodes (Lines ~26, 31, 36, 70)
- **Original Text**:
  > `highlights: ['6 Private Master Suites', 'Accommodates up to 14 guests', 'Open-Air Jacuzzi in Grand Master']`
  > `name: '25m Saltwater Heated Infinity Pool'`
- **Updated Text**:
  > `highlights: ['6 Private Master Suites', 'Accommodates up to 14 guests', 'Private Balcony & Steam Room Shower in Grey Room']`
  > `name: '25m Saltwater Heated Pool'`

---

### 8. `website/src/components/ConciergeSection.tsx`
- **Location**: Concierge Section Title (Line ~64)
- **Original Text**:
  > `Private Concierge & Butler Services`
- **Updated Text**:
  > `Private Concierge Services`

---

### 9. `website/src/components/VirtualConciergeWidget.tsx`
- **Location**: AI Concierge Response templates (Lines ~56, 63, 67, 69, 71)
- **Original Text**:
  > Referenced 25m heated infinity pool, full private staff, full butler staff, private chef service, and open-air jacuzzi in Grey Room.
- **Updated Text**:
  > Replaced with "25m heated pool", "cleaning & groundskeeping services", and updated Grey Room features to "private balcony and steam room shower".

---

### 10. `website/src/data/villaData.ts` & `amenitiesData.ts`
- **Location**: Suite Definitions (`suites`), Digital Tour Stops (`digitalTourStops`), feature lists, FAQs, and Amenities Database
- **Key Changes**:
  - `The Gold Room (Grand Master)` -> `Grey Room` (`GREY ROOM`, King Bed)
  - Grey Room Subtitle & Description updated: Removed jacuzzi references; added private balcony & steam room shower.
  - `The Grey Room (Garden Suite)` -> `Gold Room` (`GOLD ROOM`, King Bed)
  - Gold Room Subtitle, Description, Highlights, and Tour Stop 05 updated: Removed garden access and double stone vanity; added private balcony & soaking bathtub.
  - `Valley View Master Suite` -> `Black Room` (`BLACK ROOM`, King Bed)
  - Black Room Subtitle, Description, Highlights, and Tour Stop 08 updated: Removed custom cedar vanity and generic ensuite bath; added private steam shower.
  - `Courtyard Sanctuary Suite` -> `Green Guest Room` (`GREEN GUEST ROOM`, Queen Bed with Trundle, Highlights: `[]`)
  - `The Black Room (Deluxe Suite)` -> `Black Guest Room` (`BLACK GUEST ROOM`, Queen Bed with Trundle, Highlights: `[]`)
  - `Guest Wing Suite` -> `Guest House` (`GUEST HOUSE`, King Bed): Removed writing desk & library lounge; added `['Fireplace', 'Full Kitchen', 'TV', 'Private bathroom with shower']`.
  - `amenitiesData.ts`: Updated `Half basketball court` and `Outdoor children activities`; removed `Popular & Included Services` category.

---

### 11. `website/src/components/SuitesShowcase.tsx` & `SuiteDetailModal.tsx`
- **Location**: Highlights section rendering
- **Updated Text**:
  > Conditionally hides the "Key Features" section whenever `highlights` array is empty.

---

### 12. `website/src/components/ReviewsSection.tsx`
- **Location**: Guest review quote (Line ~22)
- **Original Text**:
  > `The view of the mountains from the master suite jacuzzi at sunrise is unforgettable.`
- **Updated Text**:
  > `The view of the mountains from the master suite balcony at sunrise is unforgettable.`

---

### 13. `website/index.html`
- **Location**: Primary Meta Description, Twitter Meta, and JSON-LD Structured Data Schema (Lines ~11, 27, 45, 64, 68)
- **Original Text**:
  > Featured "25m heated infinity pool" and "24/7 Butler & Private Chef Staff".
- **Updated Text**:
  > Replaced with "25m heated pool" and "Cleaning & Grounds Keeper Services".
