// Gmailフォームハンドラー
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    
    // メールの内容を設定
    const message = `
      お問い合わせがありました。
      
      お名前: ${data.name}
      メールアドレス: ${data.email}
      お問い合わせ内容:
      ${data.message}
    `;

    // Gmailに送信
    GmailApp.sendEmail(
      'tome.valor214@gmail.com', // 送信先のメールアドレス
      '【お問い合わせ】TOME VALOR', // 件名
      message
    );

    return ContentService.createTextOutput(JSON.stringify({
      success: true
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    Logger.log(error.toString());
    return ContentService.createTextOutput(JSON.stringify({
      success: false
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
