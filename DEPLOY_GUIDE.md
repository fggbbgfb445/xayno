# راهنمای نصب و استقرار زارت پیام‌رسان

## 📱 برای اندروید (APK)

### روش 1: استفاده از Android Studio (راحت‌تر)
1. دانلود Android Studio از: https://developer.android.com/studio
2. پروژه را باز کنید:
   - File → Open
   - پوشه `android` را انتخاب کنید
3. Gradle sync انجام دهید (خودکار)
4. Build → Build Bundle(s) / APK(s) → Build APK(s)
5. فایل APK در `android/app/build/outputs/apk/debug/` موجود است

### روش 2: Command Line (بدون نیاز به Android Studio)
```bash
cd android
# برای debug APK:
gradlew.bat assembleDebug

# برای release APK (امن‌تر):
gradlew.bat assembleRelease
```
APK در این مسیر قرار خواهد گرفت:
- Debug: `app/build/outputs/apk/debug/app-debug.apk`
- Release: `app/build/outputs/apk/release/app-release.apk`

### نصب APK روی تلفن
1. APK را به تلفن منتقل کنید
2. فایل را باز کنید
3. مجوزهای لازم را تأیید کنید
4. اپ نصب می‌شود

---

## 🌐 برای وب / آیفون

### سایت (لپ‌تاپ و مرورگر)
```
https://زارت-messenger.up.railway.app/
```

### آیفون (Safari)
1. سایت را در Safari باز کنید
2. دکمه Share (اشتراک‌گذاری) را بزنید
3. "Add to Home Screen" را انتخاب کنید
4. اپ به صفحه اصلی اضافه می‌شود

### اندروید (Chrome - بدون APK)
1. سایت را در Chrome باز کنید
2. منوی 3 نقطه (⋮) را بزنید
3. "Install app" را انتخاب کنید
4. اپ نصب می‌شود

---

## 🔄 بروزرسانی پروژه

اگر تغییری در `index.html` یا دیگر فایل‌های وب ایجاد کردید:

```bash
# کپی فایل‌ها به dist
Copy-Item "index.html" "dist/"
Copy-Item "sw.js" "dist/"
Copy-Item "manifest.webmanifest" "dist/"

# سپس اندروید پروژه را sync کنید
npx cap sync android
```

---

## ✅ نکات مهم

- **DEBUG APK**: برای تست روی تلفن خودی
- **RELEASE APK**: برای انتشار در گوگل پلی (نیاز به امضا)
- **PWA**: راحت‌تر برای iOS
- **APK**: بهتر برای اندروید

