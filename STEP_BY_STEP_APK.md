# 🎬 آموزش گام‌به‌گام: ساخت APK اندروید

## ⚠️ اولین بار؟ نصب ابزارهای لازم (۱۰ دقیقه)

### **گام 1: دانلود Java**

1. برو به: https://www.oracle.com/java/technologies/downloads/
2. **Java SE Development Kit** را دانلود کن (آخرین نسخه)
3. فایل را اجرا کن و تا آخر نصب کن
4. ترمینال را ببند و دوباره باز کن

**تأیید نصب:**
```powershell
java -version
```

---

### **گام 2: دانلود Android SDK**

**گزینه A: Android Studio (کامل‌تر)**
1. برو به: https://developer.android.com/studio
2. **Android Studio** را دانلود کن
3. فایل را اجرا کن
4. تا پایان نصب را ادامه دهید
5. اولین اجرا خودکار Android SDK نصب می‌کند

**گزینه B: Command Line Tools (سریع‌تر)**
1. برو به: https://developer.android.com/studio
2. پایین صفحه **"Command line tools"** را دانلود کن
3. زیپ را باز کن و به `C:\Android\cmdline-tools` کپی کن

---

### **گام 3: تنظیم Path**

ترمینال PowerShell را **به‌عنوان Administrator** باز کن:

```powershell
# اگر Android Studio نصب کردی:
[Environment]::SetEnvironmentVariable(
    'ANDROID_HOME',
    "$env:USERPROFILE\AppData\Local\Android\Sdk",
    'User'
)

# ترمینال را ببند و دوباره باز کن
```

**تأیید:**
```powershell
$env:ANDROID_HOME
# باید چیزی مثل این نشان دهد:
# C:\Users\YourName\AppData\Local\Android\Sdk
```

---

## ✅ حالا آماده ساخت APK!

### **گام 4: ساخت APK (۵ دقیقه)**

```powershell
cd "C:\Users\rasol\Desktop\اپ"

# رفتن به پوشه android
cd android

# ساخت APK برای تست (DEBUG)
gradlew.bat assembleDebug
```

**منتظر بمانید...** (۳-۵ دقیقه طول می‌کشد)

اگر موفق بود:
```
BUILD SUCCESSFUL
```

---

## 📍 APK کجاست؟

بعد از موفق بودن، فایل APK اینجاست:

```
C:\Users\rasol\Desktop\اپ\android\app\build\outputs\apk\debug\app-debug.apk
```

---

## 📱 نصب روی اندروید

### **روش 1: منتقل کردن از طریق USB**

1. اندروید را به لپ‌تاپ وصل کن
2. APK را در پوشه Download گوشی کپی کن
3. روی گوشی فایل اکسپلورر را باز کن
4. APK را پیدا کن و کلیک کن
5. **"نصب"** را بزن
6. تمام! ✨

### **روش 2: استفاده از ADB (پیشرفته)**

```powershell
# وصل کردن اندروید از طریق USB
# اطمینان دهید USB Debugging روی گوشی روشن است

adb install "C:\Users\rasol\Desktop\اپ\android\app\build\outputs\apk\debug\app-debug.apk"
```

---

## 🆘 مشکل‌گشایی

### **خطا: "gradle: The term 'gradle' is not recognized"**
```powershell
# حل:
cd "C:\Users\rasol\Desktop\اپ\android"
.\gradlew.bat assembleDebug
```

### **خطا: "Java not found"**
- Java نصب نیست! برو به **گام 1**

### **خطا: "SDK not found"**
```powershell
# Android Studio را اجرا کن و SDK نصب کن
# یا تنظیم ANDROID_HOME را دوباره کن
```

### **ساخت بسیار آهسته است؟**
- اولین بار زمان می‌برد
- بعدی‌ها سریع‌تر است

---

## ✅ خلاصه دستورات

```powershell
# 1️⃣ رفتن به پوشه
cd "C:\Users\rasol\Desktop\اپ"

# 2️⃣ رفتن به android
cd android

# 3️⃣ ساخت APK
.\gradlew.bat assembleDebug

# 4️⃣ APK آماده است!
# مسیر: app\build\outputs\apk\debug\app-debug.apk
```

---

## 🌐 سایت برای آیفون و لپ‌تاپ

هم‌زمان می‌تواند از سایت استفاده کنید:
```
https://zart-messenger.railway.app/
```

✅ ایفون → سفاری → این لینک
✅ لپ‌تاپ → هر مرورگری → این لینک

---

## 📞 سوال دارید؟

اگر مشکل داشتید، دقیق بگویید:
- کجای فرآیند؟
- چه پیغام خطا؟
- چه‌کاری می‌کردید؟

