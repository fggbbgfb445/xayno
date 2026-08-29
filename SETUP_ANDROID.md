# نصب ابزارهای لازم برای ساخت APK اندروید

## خطوات نصب

### 1️⃣ نصب Java Development Kit (JDK)
```powershell
# با استفاده از Chocolatey (اگر نصب شده است)
choco install openjdk

# یا دانلود دستی از:
# https://www.oracle.com/java/technologies/downloads/
```

### 2️⃣ نصب Android Studio
- دانلود: https://developer.android.com/studio
- اجرا کنید و تا آخر نصب ادامه دهید
- بعد از نصب، Android SDK خودکار نصب می‌شود

### 3️⃣ تنظیم Environment Variables
بعد از نصب Android Studio:
```powershell
# بررسی اینکه ANDROID_HOME تعریف شده است
$env:ANDROID_HOME
# باید چیزی مثل این نمایش دهد:
# C:\Users\YourUsername\AppData\Local\Android\Sdk
```

اگر نیست، دستی اضافه کنید:
```powershell
[Environment]::SetEnvironmentVariable(
    'ANDROID_HOME', 
    'C:\Users\YourUsername\AppData\Local\Android\Sdk', 
    'User'
)
```

### 4️⃣ ساخت APK

بعد از نصب همه‌چیز:
```powershell
cd "C:\Users\rasol\Desktop\اپ"
cd android

# ساخت debug APK (برای تست)
gradlew.bat assembleDebug

# ساخت release APK (برای انتشار)
gradlew.bat assembleRelease
```

### 5️⃣ جایی که APK ذخیره می‌شود

**Debug APK:**
```
android/app/build/outputs/apk/debug/app-debug.apk
```

**Release APK:**
```
android/app/build/outputs/apk/release/app-release.apk
```

---

## ⚠️ اگر مشکل دارید

### محل ذخیره SDK
```
C:\Users\[YourUsername]\AppData\Local\Android\Sdk
```

### بررسی نصب
```powershell
ls "$env:ANDROID_HOME\platforms"  # باید نسخه‌های Android نمایش دهد
ls "$env:ANDROID_HOME\build-tools"  # باید build-tools نمایش دهد
```

### Build Problems
اگر Gradle sync ناموفق بود:
```powershell
cd android
gradlew.bat clean
gradlew.bat build
```

---

## ✅ بعد از ساخت APK

1. APK را به تلفن منتقل کنید
2. تلفن را روی "Unknown Sources" تنظیم کنید
3. APK را باز کنید و نصب کنید
4. اپ آماده استفاده است!

