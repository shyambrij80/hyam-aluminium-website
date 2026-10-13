SHYAM ALUMINIUM WEBSITE — हिंदी निर्देश

ZIP में 5 पेज, CSS, JavaScript और sample product illustrations हैं।

पहला जरूरी काम:
1. script.js खोलें।
2. const WHATSAPP_NUMBER = "91XXXXXXXXXX"; खोजें।
3. 91XXXXXXXXXX को अपने WhatsApp नंबर से बदलें। भारत के नंबर में 91 के बाद 10 अंक लिखें। +, स्पेस या डैश न रखें।
4. अपनी असली प्रोडक्ट फोटो images फोल्डर में डालें और HTML में फोटो के नाम बदलें। अभी की तस्वीरें sample illustrations हैं।

Azure Static Web Apps पर GitHub से publish:
1. ZIP को extract करें।
2. GitHub पर नया repository बनाकर सभी फाइलें और images folder upload करें; index.html root में होना चाहिए।
3. Azure Portal > Create a resource > Static Web Apps खोलें।
4. Plan type Free चुनें, source GitHub चुनें, repository और branch चुनें।
5. Build preset Custom चुनें; App location में / रखें, API location और output location खाली छोड़ें।
6. Deployment पूरा होने पर *.azurestaticapps.net URL पर साइट जाँचें।
7. Static Web App > Custom domains में shyamaluminium.in जोड़ें और Azure द्वारा दिखाए गए DNS records अपने domain provider में सेट करें। पुराने DNS records हटाने से पहले backup लें और सुनिश्चित करें कि पुरानी वेबसाइट की जरूरत नहीं है।

ध्यान दें: Azure Static Web Apps में सामान्यतः GitHub/Azure DevOps deployment चाहिए। अगर बिना GitHub सीधे upload करना है तो Azure Storage Account > Static website का विकल्प अलग है।

यह static showcase site है। इसमें login, database, online payment या admin panel नहीं है। WhatsApp ग्राहक के डिवाइस में खुलेगा और ग्राहक खुद Send दबाएगा।
