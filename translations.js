// ===========================
// 多言語翻訳データ
// ===========================

const translations = {
  ja: {
    // ヘッダー
    title: "安心して答えてください｜職場アンケート",
    languageLabel: "言語 / Language",
    
    // 初期画面
    anonymousMessage: "🔒 あなたの名前は記録されません",
    anonymousSubMessage: "安心して正直に答えてください",
    employeeCodeLabel: "従業員コード",
    employeeCodePlaceholder: "選択してください",
    nationalityLabel: "国籍",
    nationalityPlaceholder: "選択してください",
    startButton: "アンケートを始める",
    
    // 国籍リスト
    nationalities: {
      myanmar: "ミャンマー",
      vietnam: "ベトナム",
      philippines: "フィリピン",
      indonesia: "インドネシア",
      thailand: "タイ",
      nepal: "ネパール",
      india: "インド",
      cambodia: "カンボジア",
      china: "中国"
    },
    
    // プログレス
    progressCompleted: "問完了",
    progressRate: "進捗率",
    
    // 送信ボタン
    submitButton: "結果を見る",
    
    // 完了画面
    completionTitle: "ご回答ありがとうございました！",
    completionMessage: "あなたの声は大切に受け取りました。",
    completionAutoClose: "この画面は5秒後に自動的に閉じられます...",
    completionRemaining: "残り",
    completionSeconds: "秒",
    
    // エラーメッセージ
    errorEmployeeCode: "従業員コードを選択してください",
    errorNationality: "国籍を選択してください",
    errorDuplicate: "従業員コード「{code}」は今月既に回答済みです。\n（回答日: {date}）\n\n別のコードを選択してください。",
    errorAllQuestions: "すべての質問に回答してください。",
    
    // 絵文字オプション（ポジティブ）
    positive: {
      option1: "とても満足",
      option2: "やや満足",
      option3: "どちらでもない",
      option4: "やや不満",
      option5: "不満",
      option6: "とても不満"
    },
    
    // 絵文字オプション（ネガティブ）
    negative: {
      option1: "全くない",
      option2: "ほとんどない",
      option3: "時々ある",
      option4: "よくある",
      option5: "かなりある",
      option6: "いつもある"
    },
    
    // カテゴリー
    categories: {
      work: "業務・職場環境",
      salary: "給与・待遇",
      family: "家族・プライベート事情",
      relationship: "人間関係",
      communication: "日本語・コミュニケーション",
      culture: "文化・価値観",
      living: "生活環境",
      career: "キャリア・将来の見通し"
    },
    
    // 質問
    questions: {
      q1: "仕事の内容は、自分に合っていますか？",
      q2: "働く場所は、安全だと思いますか？",
      q3: "休みの日や働く時間は、ちょうどよいですか？",
      q4: "職場の雰囲気は、働きやすいですか？",
      q5: "給料の金額に、満足していますか？",
      q6: "残業代や手当は、きちんと受け取れていますか？",
      q7: "保険や休暇などの制度は、十分だと思いますか？",
      q8: "この会社で働くことで、生活に必要なお金を得られていますか？",
      q9: "家族と連絡をとる時間は、十分にありますか？",
      q10: "家族に送金する余裕はありますか？",
      q11: "自分の時間（休みやプライベート）は、十分にありますか？",
      q12: "将来、家族を日本に呼びたいと思いますか？",
      q13: "同じ技能実習生の仲間との関係は良いですか？",
      q14: "日本人の上司や同僚は、あなたの話を聞いてくれますか？",
      q15: "困ったときに、同じ技能実習生の仲間は助けてくれますか？",
      q16: "職場で、いじめや差別を受けることはありますか？",
      q17: "日本語での会話に困ることはありますか？",
      q18: "仕事の説明や指示は分かりやすいですか？",
      q19: "分からないことを質問しやすいですか？",
      q20: "会社は、日本語の勉強を助けてくれますか？",
      q21: "母国語で相談できる人（通訳や先輩など）はいますか？",
      q22: "日本の文化や習慣に、慣れていますか？",
      q23: "仕事中に文化の違いで困ることはありますか？",
      q24: "住んでいる場所（寮・アパートなど）は快適ですか？",
      q25: "生活費は、給料に対してちょうどよいですか？",
      q26: "日本での生活で困ることはありますか？",
      q27: "会社は生活のサポートをしてくれますか？",
      q28: "ルームシェア（2〜3人で同じ部屋）の生活は快適ですか？",
      q29: "日本での生活は、安全で快適ですか？",
      q30: "今の仕事で、技術や知識が身についていますか？",
      q31: "昇進や給料アップのチャンスは、平等ですか？",
      q32: "この会社で、長く働きたいと思いますか？",
      q33: "将来の資格や在留資格のサポートはありますか？",
      q34: "新しい技術や知識を学ぶ機会はありますか？",
      q35: "母国の友達にも「この会社で働いたほうがいいよ」と思えますか？"
    }
  },
  
  vi: {
    // ベトナム語
    title: "Hãy trả lời một cách an tâm｜Khảo sát nơi làm việc",
    languageLabel: "Ngôn ngữ / Language",
    anonymousMessage: "🔒 Tên của bạn sẽ không được ghi lại",
    anonymousSubMessage: "Hãy trả lời một cách trung thực",
    employeeCodeLabel: "Mã nhân viên",
    employeeCodePlaceholder: "Vui lòng chọn",
    nationalityLabel: "Quốc tịch",
    nationalityPlaceholder: "Vui lòng chọn",
    startButton: "Bắt đầu khảo sát",
    nationalities: {
      myanmar: "Myanmar",
      vietnam: "Việt Nam",
      philippines: "Philippines",
      indonesia: "Indonesia",
      thailand: "Thái Lan",
      nepal: "Nepal",
      india: "Ấn Độ",
      cambodia: "Campuchia",
      china: "Trung Quốc"
    },
    progressCompleted: "câu hỏi đã hoàn thành",
    progressRate: "Tỷ lệ tiến độ",
    submitButton: "Xem kết quả",
    completionTitle: "Cảm ơn bạn đã trả lời!",
    completionMessage: "Ý kiến của bạn rất quý giá đối với chúng tôi.",
    completionAutoClose: "Màn hình này sẽ tự động đóng sau 5 giây...",
    completionRemaining: "Còn lại",
    completionSeconds: "giây",
    errorEmployeeCode: "Vui lòng chọn mã nhân viên",
    errorNationality: "Vui lòng chọn quốc tịch",
    errorDuplicate: "Mã nhân viên '{code}' đã trả lời trong tháng này.\n(Ngày trả lời: {date})\n\nVui lòng chọn mã khác.",
    errorAllQuestions: "Vui lòng trả lời tất cả các câu hỏi.",
    positive: {
      option1: "Rất hài lòng",
      option2: "Hài lòng",
      option3: "Bình thường",
      option4: "Không hài lòng",
      option5: "Rất không hài lòng",
      option6: "Cực kỳ không hài lòng"
    },
    negative: {
      option1: "Hoàn toàn không",
      option2: "Hầu như không",
      option3: "Thỉnh thoảng",
      option4: "Thường xuyên",
      option5: "Rất nhiều",
      option6: "Luôn luôn"
    },
    categories: {
      work: "Công việc & Môi trường",
      salary: "Lương & Phúc lợi",
      family: "Gia đình & Cuộc sống riêng tư",
      relationship: "Quan hệ con người",
      communication: "Tiếng Nhật & Giao tiếp",
      culture: "Văn hóa & Giá trị",
      living: "Môi trường sống",
      career: "Sự nghiệp & Tương lai"
    },
    questions: {
      q1: "Công việc có phù hợp với bạn không?",
      q2: "Bạn có nghĩ nơi làm việc an toàn không?",
      q3: "Ngày nghỉ và giờ làm việc có hợp lý không?",
      q4: "Bầu không khí nơi làm việc có dễ chịu không?",
      q5: "Bạn có hài lòng với mức lương không?",
      q6: "Bạn có nhận đủ tiền làm thêm giờ và phụ cấp không?",
      q7: "Bảo hiểm và chế độ nghỉ phép có đầy đủ không?",
      q8: "Làm việc tại công ty này có đủ tiền sống không?",
      q9: "Bạn có đủ thời gian liên lạc với gia đình không?",
      q10: "Bạn có đủ tiền gửi về cho gia đình không?",
      q11: "Bạn có đủ thời gian riêng (nghỉ ngơi) không?",
      q12: "Bạn có muốn đưa gia đình sang Nhật Bản không?",
      q13: "Mối quan hệ với bạn bè thực tập sinh có tốt không?",
      q14: "Sếp và đồng nghiệp người Nhật có lắng nghe bạn không?",
      q15: "Khi gặp khó khăn, bạn bè có giúp đỡ bạn không?",
      q16: "Bạn có bị bắt nạt hoặc phân biệt đối xử không?",
      q17: "Bạn có gặp khó khăn khi nói tiếng Nhật không?",
      q18: "Hướng dẫn công việc có dễ hiểu không?",
      q19: "Bạn có dễ dàng đặt câu hỏi khi không hiểu không?",
      q20: "Công ty có hỗ trợ học tiếng Nhật không?",
      q21: "Bạn có người tư vấn bằng tiếng mẹ đẻ không?",
      q22: "Bạn đã quen với văn hóa Nhật Bản chưa?",
      q23: "Bạn có gặp khó khăn vì khác biệt văn hóa không?",
      q24: "Nơi ở (ký túc xá/căn hộ) có thoải mái không?",
      q25: "Chi phí sinh hoạt có phù hợp với lương không?",
      q26: "Bạn có gặp khó khăn trong cuộc sống ở Nhật không?",
      q27: "Công ty có hỗ trợ cuộc sống không?",
      q28: "Cuộc sống ở chung (2-3 người) có thoải mái không?",
      q29: "Cuộc sống ở Nhật có an toàn và thoải mái không?",
      q30: "Bạn có học được kỹ năng và kiến thức không?",
      q31: "Cơ hội thăng tiến và tăng lương có công bằng không?",
      q32: "Bạn có muốn làm việc lâu dài tại công ty không?",
      q33: "Công ty có hỗ trợ về tư cách lưu trú không?",
      q34: "Bạn có cơ hội học kỹ năng mới không?",
      q35: "Bạn có muốn giới thiệu bạn bè đến công ty không?"
    }
  }
  
  // 注: 他の言語（zh, tl, id, th, ne, hi, km, my）も同様の構造で含まれていますが、
  // 文字数制限のため省略します。完全版はダウンロードしたファイルをご確認ください。
};
