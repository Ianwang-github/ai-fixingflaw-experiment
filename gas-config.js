// Study 2 後端設定檔
// 之後若重新部署 Apps Script、拿到新的 Web App URL，
// 只需要改這個檔案，不需要動 index.html 本體。

window.GAS_URL = "https://script.google.com/macros/s/AKfycbyifqLpLE-f9QrF7o5Q7HRgxiPucbC4JUQYZFlBsXE6Ik9ic6DQOXYl9dnyLZWhmqQ-Aw/exec;

// 共享密鑰：需與 Apps Script 裡的 SHARED_SECRET 完全一致，
// 用來防止陌生人找到這個公開端點後亂塞假資料進 Google Sheet。
// 這串字串本身在瀏覽器端仍然是可見的（純前端架構無法真正隱藏），
// 目的不是保密，而是擋掉隨機掃描到這個 URL 的機器人／腳本。
window.GAS_SECRET = "study2_ntust_2026_x7k2";
