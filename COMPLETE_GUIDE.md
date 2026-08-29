# 📱 آموزش مرحله‌به‌مرحله: نصب اپ روی اندروید

## ✅ **مرحله 1️⃣ : نصب Java (۳ دقیقه)**

### **Step 1.1: دانلود Java**
1. برو این لینک: https://www.oracle.com/java/technologies/downloads/
2. **Java SE 22** را انتخاب کن
3. **Windows x64 Installer** را کلیک کن
4. فایل `jdk-22.0.2_windows-x64_bin.msi` دانلود می‌شود
5. فایل را دوبل کلیک کن (اجرا کن)

### **Step 1.2: نصب Java**
1. **Install** را بزن
2. تمام مراحل رو Next بزن
3. **Install** را دوباره بزن
4. بعد از اتمام → **Close** را بزن
5. **ترمینال را کامل بسته کن** (اگر باز است)

### **Step 1.3: تأیید نصب Java**
ترمینال PowerShell جدید باز کن و بنویس:
```powershell
java -version
```

اگر نمایش داد:
```
java version "22.0.2"
```
✅ Java نصب شد!

---

## ✅ **مرحله 2️⃣ : نصب Android Studio (۱۰ دقیقه)**

### **Step 2.1: دانلود Android Studio**
1. برو این لینک: https://developer.android.com/studio
2. **Download Android Studio** را بزن
3. فایل دانلود می‌شود (۱ GB - کمی بزرگ است)
4. صبر کن تا تموم شود

### **Step 2.2: نصب Android Studio**
1. فایل دانلود شده را دوبل کلیک کن
2. **Next** را بزن
3. تمام تنظیمات پیش‌فرض را قبول کن
4. **Install** را بزن
5. صبر کن تا اتمام یابد (۵-۱۰ دقیقه)
6. **Finish** را بزن

### **Step 2.3: اولین اجرای Android Studio**
1. **Android Studio** را باز کن (خودکار باز می‌شود)
2. اگر پرسید SDK نصب کند → **Yes** بزن
3. صبر کن تا SDK نصب شود (۵ دقیقه)
4. بسته کن

✅ Android SDK نصب شد!

---

## ✅ **مرحله 3️⃣ : ساخت APK (۱۵ دقیقه)**

### **Step 3.1: باز کردن ترمینال**
PowerShell را باز کن و این دستورات را بنویس:

```powershell
# رفتن به پوشه پروژه
cd "C:\Users\rasol\Desktop\اپ\android"

# ساخت APK
.\gradlew.bat assembleDebug
```

⏳ **منتظر بمان** (۱۰-۱۵ دقیقه دارد)

بعد از اتمام باید نوشته شود:
```
BUILD SUCCESSFUL
```

### **Step 3.2: APK کجاست؟**

APK فایل اینجاست:
```
C:\Users\rasol\Desktop\اپ\android\app\build\outputs\apk\debug\app-debug.apk
```

**کپی این مسیر برای بعدی!**

---

## ✅ **مرحله 4️⃣ : نصب روی اندروید (۵ دقیقه)**

### **Step 4.1: تنظیمات اندروید**

روی **گوشی اندروید** بالا رو:

1. **Settings** (تنظیمات) را باز کن
2. **About phone** (درباره گوشی) را پیدا کن
3. **Build number** را **۷ بار** بزن (سریع تر)
4. منتظر بمان تا نوشت "Developer options activated"
5. برگرد به **Settings**
6. **Developer options** را باز کن
7. **USB Debugging** را روشن کن (آن را فعال کن)

### **Step 4.2: اتصال به لپ‌تاپ**

1. **کابل USB** گوشی را به لپ‌تاپ وصل کن
2. روی گوشی یک پیام ظاهر می‌شود: "Allow USB debugging?"
3. **Allow** یا **Yes** را بزن
4. **Always allow from this computer** را عینکد کن
5. تأیید کن

### **Step 4.3: منتقل کردن APK**

**روش A: با File Explorer (ساده‌تر)**

1. **File Explorer** را باز کن
2. به اینجا برو:
   ```
   C:\Users\rasol\Desktop\اپ\android\app\build\outputs\apk\debug\
   ```
3. فایل `app-debug.apk` را پیدا کن
4. آن را **کپی** کن (راست کلیک → Copy)
5. **اندروید** شو
6. **Files** (مدیریت فایل‌ها) را باز کن
7. **Download** پوشه را باز کن
8. **Paste** کن (راست کلیک → Paste)
9. منتظر بمان تا کپی شود

### **Step 4.4: نصب APK روی اندروید**

1. روی اندروید **Files** را باز کن
2. **Downloads** پوشه را باز کن
3. `app-debug.apk` را پیدا کن
4. **دوبل کلیک** کن یا بزن
5. پیام ظاهر می‌شود: "Install"
6. **Install** را بزن
7. منتظر بمان تا نصب شود (۱ دقیقه)
8. **Open** یا **Done** را بزن

✅ **اپ نصب شد!**

---

## 🎉 **نتیجه**

اپ الان روی اندروید نصب است!
- روی صفحه اصلی نمایش داده می‌شود
- آن را مثل هر اپ دیگری استفاده کن

---

## ❓ **اگر مشکل دارید**

### **"Build Failed" یا خطا در ساخت APK:**
```powershell
cd "C:\Users\rasol\Desktop\اپ\android"
.\gradlew.bat clean
.\gradlew.bat assembleDebug
```

### **APK نصب نمی‌شود:**
- اطمینان دهید USB Debugging روشن است
- کابل USB را دوباره وصل کن
- اندروید را دوباره راه‌اندازی کن

### **Java یا Android پیدا نیست:**
- اطمینان دهید ترمینال جدید است (بسته و دوباره باز کنید)
- اطمینان دهید نصب مکمل شده است

---

## 📍 مسیرهای مهم

| مورد | مسیر |
|------|------|
| Java | نصب شده در system |
| Android SDK | C:\Users\[YourName]\AppData\Local\Android\Sdk |
| APK فایل | C:\Users\rasol\Desktop\اپ\android\app\build\outputs\apk\debug\app-debug.apk |
| پروژه | C:\Users\rasol\Desktop\اپ |

---

**آماده؟ شروع کن از مرحله 1!** 🚀
