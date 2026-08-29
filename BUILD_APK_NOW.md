# 🚀 ساخت APK الان - گام‌های دقیق

## مرحله 1: نصب Java (۲ دقیقه)

### **دانلود و نصب خودکار:**

```powershell
# کپی کن و در PowerShell بچسباند:
winget install Oracle.JDK.22
```

اگر `winget` کار نکرد:

### **دانلود دستی:**

1. برو: https://www.oracle.com/java/technologies/downloads/
2. **Java SE 22** را انتخاب کن
3. **Windows x64 Installer** را دانلود کن
4. دبل‌کلیک و نصب کن
5. **ترمینال را ببند و دوباره باز کن**

**تأیید (دستور را بچسباند):**
```powershell
java -version
```

اگر نمایش داد `java version "..."` → ✅ موفق!

---

## مرحله 2: نصب Android SDK (۲ دقیقه)

### **روش A: Android Studio (راحت)**

1. https://developer.android.com/studio دانلود کن
2. فایل اجرا کن و نصب کن
3. اولین بار اجرا → خودکار SDK نصب می‌کند
4. بسته کن

---

### **روش B: Command Line (سریع)**

```powershell
# پوشه ایجاد کن
New-Item -ItemType Directory -Path "C:\Android" -Force

# دانلود (https://developer.android.com/studio)
# Command line tools را دانلود کن

# یا استفاده از winget:
winget install Google.AndroidSDK
```

---

## مرحله 3: تنظیم Environment (۱ دقیقه)

```powershell
# PowerShell را **به‌عنوان Administrator** باز کن

# دستور اول را کپی و بچسباند:
[Environment]::SetEnvironmentVariable(
    'ANDROID_HOME',
    "$env:USERPROFILE\AppData\Local\Android\Sdk",
    'User'
)

# تأیید:
$env:ANDROID_HOME
```

---

## مرحله 4: ساخت APK (۵ دقیقه)

```powershell
# پوشه پروژه
cd "C:\Users\rasol\Desktop\اپ\android"

# ساخت APK
.\gradlew.bat assembleDebug
```

**منتظر بمانید...**

اگر نوشت `BUILD SUCCESSFUL` → ✅ موفق!

---

## مرحله 5: APK کجاست؟

```
C:\Users\rasol\Desktop\اپ\android\app\build\outputs\apk\debug\app-debug.apk
```

APK را کپی کن و به اندروید منتقل کن!

---

## 📱 نصب روی اندروید

### **Step 1: روی اندروید تنظیمات**
1. Settings → About phone
2. Build number را ۷ بار بزن
3. Developer options روشن شود
4. USB Debugging را روشن کن

### **Step 2: منتقل کردن**
1. اندروید را USB به لپ‌تاپ وصل کن
2. APK را در Downloads کپی کن

### **Step 3: نصب**
1. روی اندروید File Manager باز کن
2. Downloads
3. APK را بزن
4. Install

---

## ✅ نتیجه

بعد از نصب:
- اپ روی صفحه اصلی نشان داده می‌شود
- روی گوشی اجرا می‌شود
- ۰% مصرف اینترنت (روی دستگاه اجرا می‌شود)

---

## 🌐 ایفون + لپ‌تاپ = سایت

هر دو بدون نصب از سایت استفاده می‌کنند:
```
https://zart-messenger.railway.app/
```

---

## ❌ مشکل دارید؟

اگر خطا گرفتید:
1. دقیق متن خطا را بگویید
2. کجای مراحل؟
3. من فوری حل می‌کنم

