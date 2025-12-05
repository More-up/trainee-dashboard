// ===========================
// 多言語翻訳データ (16言語対応)
// ===========================
const translations = {
  // ===========================
  // 日本語
  // ===========================
  ja: {
    title: '安心して答えてください | 職場アンケート',
    languageLabel: '言語選択',
    anonymousMessage: 'あなたの名前は記録されません',
    anonymousSubMessage: '安心して正直に答えてください',
    employeeCodeLabel: '従業員コード',
    employeeCodePlaceholder: '1〜20の番号を選択',
    nationalityLabel: '国籍',
    nationalityPlaceholder: '国籍を選択してください',
    startButton: 'アンケートを始める',
    submitButton: '結果を見る',
    
    // 16カ国の国籍
    nationalities: {
      vietnam: 'ベトナム',
      cambodia: 'カンボジア',
      india: 'インド',
      philippines: 'フィリピン',
      laos: 'ラオス',
      mongolia: 'モンゴル',
      bangladesh: 'バングラデシュ',
      srilanka: 'スリランカ',
      myanmar: 'ミャンマー',
      bhutan: 'ブータン',
      uzbekistan: 'ウズベキスタン',
      pakistan: 'パキスタン',
      thailand: 'タイ',
      indonesia: 'インドネシア',
      nepal: 'ネパール',
      china: '中国'
    },
    
    // カテゴリー
    categories: {
      work: '1. 業務・職場環境',
      salary: '2. 給与・待遇',
      family: '3. 家族・プライベート事情',
      relationship: '4. 人間関係',
      communication: '5. 日本語・コミュニケーション',
      culture: '6. 文化・価値観',
      living: '7. 生活環境',
      career: '8. キャリア・将来の見通し'
    },
    
    // 質問 (35問)
    questions: {
      q1: '仕事の内容は、自分に合っていますか?',
      q2: '働く場所は、安全だと思いますか?',
      q3: '休みの日や働く時間は、ちょうどよいですか?',
      q4: '職場の雰囲気は、働きやすいですか?',
      q5: '給料の金額に、満足していますか?',
      q6: '残業代や手当は、きちんと受け取れていますか?',
      q7: '保険や休暇などの制度は、十分だと思いますか?',
      q8: 'この会社で働くことで、生活に必要なお金を得られていますか?',
      q9: '家族と連絡をとる時間は、十分にありますか?',
      q10: '家族に送金する余裕はありますか?',
      q11: '自分の時間(休みやプライベート)は、十分にありますか?',
      q12: '将来、家族を日本に呼びたいと思いますか?',
      q13: '同じ技能実習生の仲間との関係は良いですか?',
      q14: '日本人の上司や同僚は、あなたの話を聞いてくれますか?',
      q15: '困ったときに、同じ技能実習生の仲間は助けてくれますか?',
      q16: '職場で、いじめや差別を受けることはありますか?',
      q17: '日本語での会話に困ることはありますか?',
      q18: '仕事の説明や指示は分かりやすいですか?',
      q19: '分からないことを質問しやすいですか?',
      q20: '会社は、日本語の勉強を助けてくれますか?',
      q21: '母国語で相談できる人(通訳や先輩など)はいますか?',
      q22: '日本の文化や習慣に、慣れていますか?',
      q23: '仕事中に文化の違いで困ることはありますか?',
      q24: '住んでいる場所(寮・アパートなど)は快適ですか?',
      q25: '生活費は、給料に対してちょうどよいですか?',
      q26: '日本での生活で困ることはありますか?',
      q27: '会社は生活のサポートをしてくれますか?',
      q28: '寮や家での生活環境(部屋の広さ・設備など)に満足していますか?',
      q29: '日本での生活は、安全で快適ですか?',
      q30: '今の仕事で、技術や知識が身についていますか?',
      q31: '頑張った分だけ、評価や待遇が良くなると感じますか?',
      q32: 'この会社で、長く働きたいと思いますか?',
      q33: 'ビザ(在留資格)の更新や手続きで、会社や組合は助けてくれますか?',
      q34: 'この会社で働くことで、母国に帰ってから役立つ技術が学べていますか?',
      q35: '母国の友達にも「この会社で働いたほうがいいよ」と思えますか?'
    },
    
    // 回答タイプ1: 満足度
    satisfaction: {
      option1: 'とても満足',
      option2: 'やや満足',
      option3: 'どちらとも言えない',
      option4: 'やや不満',
      option5: 'かなり不満',
      option6: '全く満足していない'
    },
    
    // 回答タイプ2: 希望・意欲
    desire: {
      option1: 'とてもそう思う',
      option2: 'ややそう思う',
      option3: 'どちらとも言えない',
      option4: 'あまりそう思わない',
      option5: 'ほとんどそう思わない',
      option6: '全くそう思わない'
    },
    
    // 回答タイプ3: 理解度
    understanding: {
      option1: 'とてもよく分かる',
      option2: 'まあまあ分かる',
      option3: 'どちらとも言えない',
      option4: 'あまり分からない',
      option5: 'ほとんど分からない',
      option6: '全く分からない'
    },
    
    // 回答タイプ4: 慣れ
    familiarity: {
      option1: 'とてもよく慣れている',
      option2: 'まあまあ慣れている',
      option3: 'どちらとも言えない',
      option4: 'あまり慣れていない',
      option5: 'ほとんど慣れていない',
      option6: '全く慣れていない'
    },
    
    // 回答タイプ5: 有無・可能性
    availability: {
      option1: '十分にいる/ある/学べている',
      option2: 'まあまあいる/ある/学べている',
      option3: 'どちらとも言えない',
      option4: 'あまりいない/ない/学べていない',
      option5: 'ほとんどいない/ない/学べていない',
      option6: '全くいない/ない/学べていない'
    },
    
    // 回答タイプ6: ネガティブ質問
    negative: {
      option1: '全くない',
      option2: 'ほとんどない',
      option3: 'どちらとも言えない',
      option4: 'たまにある',
      option5: 'よくある',
      option6: 'いつもある'
    },
    
    // エラーメッセージ
    errorEmployeeCode: '従業員コードを選択してください',
    errorNationality: '国籍を選択してください',
    errorAllQuestions: 'すべての質問に回答してください',
    errorDuplicate: '従業員コード {code} は今月すでに回答済みです({date})',
    
    // 完了画面
    completionTitle: 'ご協力ありがとうございました！',
    completionMessage: 'あなたの回答は安全に保存されました',
    completionAutoClose: 'このページは自動的に閉じます',
    completionRemaining: '残り',
    completionSeconds: '秒',
    
    footerInfo: '所要時間: 約5〜10分'
  },

  // ===========================
  // ベトナム語
  // ===========================
  vi: {
    title: 'Hãy trả lời một cách an tâm | Khảo sát nơi làm việc',
    languageLabel: 'Chọn ngôn ngữ',
    anonymousMessage: 'Tên của bạn sẽ không được ghi lại',
    anonymousSubMessage: 'Hãy trả lời một cách trung thực',
    employeeCodeLabel: 'Mã nhân viên',
    employeeCodePlaceholder: 'Chọn số từ 1 đến 20',
    nationalityLabel: 'Quốc tịch',
    nationalityPlaceholder: 'Vui lòng chọn quốc tịch',
    startButton: 'Bắt đầu khảo sát',
    submitButton: 'Xem kết quả',
    
    nationalities: {
      vietnam: 'Việt Nam',
      cambodia: 'Campuchia',
      india: 'Ấn Độ',
      philippines: 'Philippines',
      laos: 'Lào',
      mongolia: 'Mông Cổ',
      bangladesh: 'Bangladesh',
      srilanka: 'Sri Lanka',
      myanmar: 'Myanmar',
      bhutan: 'Bhutan',
      uzbekistan: 'Uzbekistan',
      pakistan: 'Pakistan',
      thailand: 'Thái Lan',
      indonesia: 'Indonesia',
      nepal: 'Nepal',
      china: 'Trung Quốc'
    },
    
    categories: {
      work: '1. Công việc & Môi trường làm việc',
      salary: '2. Lương & Đãi ngộ',
      family: '3. Gia đình & Đời sống cá nhân',
      relationship: '4. Quan hệ con người',
      communication: '5. Tiếng Nhật & Giao tiếp',
      culture: '6. Văn hóa & Giá trị',
      living: '7. Môi trường sống',
      career: '8. Sự nghiệp & Tương lai'
    },
    
    questions: {
      q1: 'Nội dung công việc có phù hợp với bạn không?',
      q2: 'Bạn có cảm thấy nơi làm việc an toàn không?',
      q3: 'Ngày nghỉ và giờ làm việc có phù hợp không?',
      q4: 'Bầu không khí nơi làm việc có dễ làm việc không?',
      q5: 'Bạn có hài lòng với mức lương không?',
      q6: 'Bạn có nhận đủ tiền làm thêm giờ và phụ cấp không?',
      q7: 'Các chế độ như bảo hiểm, nghỉ phép có đầy đủ không?',
      q8: 'Làm việc tại công ty này có đủ tiền cho cuộc sống không?',
      q9: 'Bạn có đủ thời gian liên lạc với gia đình không?',
      q10: 'Bạn có đủ tiền để gửi về cho gia đình không?',
      q11: 'Bạn có đủ thời gian riêng (nghỉ ngơi, đời tư) không?',
      q12: 'Bạn có muốn đưa gia đình sang Nhật Bản trong tương lai không?',
      q13: 'Quan hệ với các thực tập sinh khác có tốt không?',
      q14: 'Cấp trên và đồng nghiệp người Nhật có lắng nghe bạn không?',
      q15: 'Khi gặp khó khăn, các thực tập sinh khác có giúp đỡ bạn không?',
      q16: 'Bạn có bị bắt nạt hoặc phân biệt đối xử nơi làm việc không?',
      q17: 'Bạn có gặp khó khăn khi giao tiếp bằng tiếng Nhật không?',
      q18: 'Giải thích và hướng dẫn công việc có dễ hiểu không?',
      q19: 'Bạn có dễ hỏi khi không hiểu điều gì đó không?',
      q20: 'Công ty có hỗ trợ bạn học tiếng Nhật không?',
      q21: 'Có người (phiên dịch, tiền bối) để tư vấn bằng tiếng mẹ đẻ không?',
      q22: 'Bạn có quen với văn hóa và phong tục Nhật Bản không?',
      q23: 'Bạn có gặp khó khăn do khác biệt văn hóa trong công việc không?',
      q24: 'Nơi ở (ký túc xá, căn hộ) có thoải mái không?',
      q25: 'Chi phí sinh hoạt có phù hợp với mức lương không?',
      q26: 'Bạn có gặp khó khăn trong cuộc sống tại Nhật Bản không?',
      q27: 'Công ty có hỗ trợ cuộc sống của bạn không?',
      q28: 'Bạn có hài lòng với môi trường sống (diện tích phòng, tiện nghi) tại ký túc xá hoặc nhà không?',
      q29: 'Cuộc sống tại Nhật Bản có an toàn và thoải mái không?',
      q30: 'Bạn có đang tích lũy được kỹ thuật và kiến thức từ công việc hiện tại không?',
      q31: 'Bạn có cảm thấy nỗ lực của mình được đánh giá và đãi ngộ tốt hơn không?',
      q32: 'Bạn có muốn làm việc lâu dài tại công ty này không?',
      q33: 'Công ty hoặc hiệp hội có giúp đỡ việc gia hạn và thủ tục visa (tư cách lưu trú) không?',
      q34: 'Bạn có đang học được kỹ thuật hữu ích cho khi trở về quê nhà từ công việc tại công ty này không?',
      q35: 'Bạn có nghĩ rằng bạn sẽ giới thiệu bạn bè ở quê nhà làm việc tại công ty này không?'
    },
    
    satisfaction: {
      option1: 'Rất hài lòng',
      option2: 'Khá hài lòng',
      option3: 'Không chắc chắn',
      option4: 'Hơi không hài lòng',
      option5: 'Khá không hài lòng',
      option6: 'Hoàn toàn không hài lòng'
    },
    
    desire: {
      option1: 'Rất đồng ý',
      option2: 'Khá đồng ý',
      option3: 'Không chắc chắn',
      option4: 'Hơi không đồng ý',
      option5: 'Khá không đồng ý',
      option6: 'Hoàn toàn không đồng ý'
    },
    
    understanding: {
      option1: 'Rất dễ hiểu',
      option2: 'Khá dễ hiểu',
      option3: 'Không chắc chắn',
      option4: 'Hơi khó hiểu',
      option5: 'Khá khó hiểu',
      option6: 'Hoàn toàn không hiểu'
    },
    
    familiarity: {
      option1: 'Rất quen thuộc',
      option2: 'Khá quen thuộc',
      option3: 'Không chắc chắn',
      option4: 'Hơi chưa quen',
      option5: 'Khá chưa quen',
      option6: 'Hoàn toàn chưa quen'
    },
    
    availability: {
      option1: 'Có đầy đủ',
      option2: 'Có khá nhiều',
      option3: 'Không chắc chắn',
      option4: 'Có ít',
      option5: 'Có rất ít',
      option6: 'Hoàn toàn không có'
    },
    
    negative: {
      option1: 'Hoàn toàn không có',
      option2: 'Hầu như không có',
      option3: 'Không chắc chắn',
      option4: 'Thỉnh thoảng có',
      option5: 'Thường xuyên có',
      option6: 'Luôn luôn có'
    },
    
    errorEmployeeCode: 'Vui lòng chọn mã nhân viên',
    errorNationality: 'Vui lòng chọn quốc tịch',
    errorAllQuestions: 'Vui lòng trả lời tất cả các câu hỏi',
    errorDuplicate: 'Mã nhân viên {code} đã trả lời trong tháng này ({date})',
    
    completionTitle: 'Cảm ơn sự hợp tác của bạn!',
    completionMessage: 'Câu trả lời của bạn đã được lưu an toàn',
    completionAutoClose: 'Trang này sẽ tự động đóng',
    completionRemaining: 'Còn lại',
    completionSeconds: 'giây',
    
    footerInfo: 'Thời gian: Khoảng 5-10 phút'
  },

  // ===========================
  // 中国語
  // ===========================
  zh: {
    title: '请放心回答 | 职场问卷调查',
    languageLabel: '选择语言',
    anonymousMessage: '您的姓名不会被记录',
    anonymousSubMessage: '请放心诚实回答',
    employeeCodeLabel: '员工代码',
    employeeCodePlaceholder: '选择1到20的号码',
    nationalityLabel: '国籍',
    nationalityPlaceholder: '请选择国籍',
    startButton: '开始问卷',
    submitButton: '查看结果',
    
    nationalities: {
      vietnam: '越南',
      cambodia: '柬埔寨',
      india: '印度',
      philippines: '菲律宾',
      laos: '老挝',
      mongolia: '蒙古',
      bangladesh: '孟加拉国',
      srilanka: '斯里兰卡',
      myanmar: '缅甸',
      bhutan: '不丹',
      uzbekistan: '乌兹别克斯坦',
      pakistan: '巴基斯坦',
      thailand: '泰国',
      indonesia: '印度尼西亚',
      nepal: '尼泊尔',
      china: '中国'
    },
    
    categories: {
      work: '1. 业务·职场环境',
      salary: '2. 工资·待遇',
      family: '3. 家庭·私人事务',
      relationship: '4. 人际关系',
      communication: '5. 日语·沟通',
      culture: '6. 文化·价值观',
      living: '7. 生活环境',
      career: '8. 职业·未来展望'
    },
    
    questions: {
      q1: '工作内容适合您吗？',
      q2: '您觉得工作场所安全吗？',
      q3: '休息日和工作时间合适吗？',
      q4: '职场氛围容易工作吗？',
      q5: '您对工资金额满意吗？',
      q6: '加班费和补贴能正常领取吗？',
      q7: '保险和休假等制度充分吗？',
      q8: '在这家公司工作能获得生活所需的钱吗？',
      q9: '与家人联系的时间充分吗？',
      q10: '有余力给家人汇款吗？',
      q11: '自己的时间(休息和私人)充分吗？',
      q12: '将来想把家人接到日本吗？',
      q13: '与其他技能实习生的关系好吗？',
      q14: '日本的上司和同事会听您说话吗？',
      q15: '遇到困难时，其他技能实习生会帮助您吗？',
      q16: '在职场有受到欺凌或歧视吗？',
      q17: '日语会话有困难吗？',
      q18: '工作的说明和指示容易理解吗？',
      q19: '不明白的事情容易提问吗？',
      q20: '公司帮助您学习日语吗？',
      q21: '有可以用母语商量的人(翻译或前辈等)吗？',
      q22: '您习惯日本的文化和习俗吗？',
      q23: '工作中因文化差异而困扰吗？',
      q24: '居住的地方(宿舍·公寓等)舒适吗？',
      q25: '生活费相对工资合适吗？',
      q26: '在日本的生活中有困扰吗？',
      q27: '公司支持您的生活吗？',
      q28: '您对宿舍或家里的生活环境(房间大小·设施等)满意吗？',
      q29: '在日本的生活安全舒适吗？',
      q30: '您在现在的工作中学到了技术和知识吗？',
      q31: '您感觉努力的程度会带来更好的评价和待遇吗？',
      q32: '您想在这家公司长期工作吗？',
      q33: '公司或工会在签证(在留资格)的更新和手续上帮助您吗？',
      q34: '您在这家公司工作能学到回国后有用的技术吗？',
      q35: '您会向祖国的朋友推荐"在这家公司工作比较好"吗？'
    },
    
    satisfaction: {
      option1: '非常满意',
      option2: '比较满意',
      option3: '不确定',
      option4: '有点不满',
      option5: '比较不满',
      option6: '完全不满意'
    },
    
    desire: {
      option1: '非常同意',
      option2: '比较同意',
      option3: '不确定',
      option4: '有点不同意',
      option5: '比较不同意',
      option6: '完全不同意'
    },
    
    understanding: {
      option1: '非常容易理解',
      option2: '比较容易理解',
      option3: '不确定',
      option4: '有点难理解',
      option5: '比较难理解',
      option6: '完全不理解'
    },
    
    familiarity: {
      option1: '非常习惯',
      option2: '比较习惯',
      option3: '不确定',
      option4: '有点不习惯',
      option5: '比较不习惯',
      option6: '完全不习惯'
    },
    
    availability: {
      option1: '有很多',
      option2: '有一些',
      option3: '不确定',
      option4: '不太有',
      option5: '几乎没有',
      option6: '完全没有'
    },
    
    negative: {
      option1: '完全没有',
      option2: '几乎没有',
      option3: '不确定',
      option4: '偶尔有',
      option5: '经常有',
      option6: '总是有'
    },
    
    errorEmployeeCode: '请选择员工代码',
    errorNationality: '请选择国籍',
    errorAllQuestions: '请回答所有问题',
    errorDuplicate: '员工代码 {code} 本月已回答过({date})',
    
    completionTitle: '感谢您的合作！',
    completionMessage: '您的回答已安全保存',
    completionAutoClose: '此页面将自动关闭',
    completionRemaining: '剩余',
    completionSeconds: '秒',
    
    footerInfo: '所需时间: 约5-10分钟'
  },
  // ===========================
  // フィリピン語 (タガログ語)
  // ===========================
  tl: {
    title: 'Sumagot nang may tiwala | Survey sa Trabaho',
    languageLabel: 'Pumili ng Wika',
    anonymousMessage: 'Ang iyong pangalan ay hindi irerekord',
    anonymousSubMessage: 'Sumagot nang tapat at walang alalahanin',
    employeeCodeLabel: 'Code ng Empleyado',
    employeeCodePlaceholder: 'Pumili ng numero 1 hanggang 20',
    nationalityLabel: 'Nasyonalidad',
    nationalityPlaceholder: 'Pumili ng nasyonalidad',
    startButton: 'Simulan ang Survey',
    submitButton: 'Tingnan ang Resulta',
    
    nationalities: {
      vietnam: 'Vietnam',
      cambodia: 'Cambodia',
      india: 'India',
      philippines: 'Pilipinas',
      laos: 'Laos',
      mongolia: 'Mongolia',
      bangladesh: 'Bangladesh',
      srilanka: 'Sri Lanka',
      myanmar: 'Myanmar',
      bhutan: 'Bhutan',
      uzbekistan: 'Uzbekistan',
      pakistan: 'Pakistan',
      thailand: 'Thailand',
      indonesia: 'Indonesia',
      nepal: 'Nepal',
      china: 'Tsina'
    },
    
    categories: {
      work: '1. Trabaho at Kapaligiran',
      salary: '2. Sahod at Benepisyo',
      family: '3. Pamilya at Personal',
      relationship: '4. Relasyon sa Kapwa',
      communication: '5. Wikang Hapon at Komunikasyon',
      culture: '6. Kultura at Paniniwala',
      living: '7. Kapaligiran ng Pamumuhay',
      career: '8. Karera at Kinabukasan'
    },
    
    questions: {
      q1: 'Angkop ba sa iyo ang nilalaman ng trabaho?',
      q2: 'Ligtas ba ang lugar ng trabaho?',
      q3: 'Tama ba ang araw ng pahinga at oras ng trabaho?',
      q4: 'Madaling magtrabaho ba sa kapaligiran?',
      q5: 'Nasiyahan ka ba sa halaga ng sahod?',
      q6: 'Nakukuha mo ba ang overtime pay at allowance?',
      q7: 'Sapat ba ang insurance at leave?',
      q8: 'Nakakakuha ka ba ng sapat na pera para sa buhay?',
      q9: 'May sapat na oras ka ba para makipag-ugnayan sa pamilya?',
      q10: 'May kakayahan ka bang magpadala ng pera sa pamilya?',
      q11: 'May sapat na personal na oras ka ba?',
      q12: 'Gusto mo bang dalhin ang pamilya mo sa Japan sa hinaharap?',
      q13: 'Mabuti ba ang relasyon mo sa ibang trainees?',
      q14: 'Nakikinig ba sa iyo ang mga Hapon na boss at katrabaho?',
      q15: 'Tumutulong ba sa iyo ang ibang trainees kapag may problema?',
      q16: 'May bullying o discrimination ba sa trabaho?',
      q17: 'Nahihirapan ka ba sa pakikipag-usap sa Hapon?',
      q18: 'Madaling maintindihan ba ang paliwanag sa trabaho?',
      q19: 'Madali bang magtanong kapag may hindi naiintindihan?',
      q20: 'Tinutulungan ka ba ng kumpanya na mag-aral ng Hapon?',
      q21: 'May taong maaaring kausapin sa sariling wika (interpreter, senior)?',
      q22: 'Nasanay ka na ba sa kultura at kaugalian ng Japan?',
      q23: 'Nahihirapan ka ba dahil sa pagkakaiba ng kultura sa trabaho?',
      q24: 'Komportable ba ang tirahan mo (dorm, apartment)?',
      q25: 'Tama ba ang gastos sa buhay kumpara sa sahod?',
      q26: 'May problema ka ba sa buhay sa Japan?',
      q27: 'Sinusuportahan ka ba ng kumpanya sa buhay?',
      q28: 'Nasiyahan ka ba sa kapaligiran ng pamumuhay (laki ng kwarto, pasilidad) sa dorm o bahay?',
      q29: 'Ligtas at komportable ba ang buhay sa Japan?',
      q30: 'Natututo ka ba ng teknika at kaalaman sa kasalukuyang trabaho?',
      q31: 'Nakakaramdam ka ba na ang iyong pagsisikap ay nakikita at ginagantimpalaan?',
      q32: 'Gusto mo bang magtrabaho ng matagal sa kompanyang ito?',
      q33: 'Tumutulong ba ang kumpanya o union sa pag-renew at proseso ng visa?',
      q34: 'Natututo ka ba ng teknika na makakatulong pagbalik sa bansang tinubuan mula sa trabaho dito?',
      q35: 'Mairerekumenda mo ba sa mga kaibigan sa bansa na magtrabaho dito?'
    },
    
    satisfaction: {
      option1: 'Lubos na nasiyahan',
      option2: 'Medyo nasiyahan',
      option3: 'Hindi tiyak',
      option4: 'Medyo hindi nasiyahan',
      option5: 'Hindi gaanong nasiyahan',
      option6: 'Hindi nasiyahan'
    },
    
    desire: {
      option1: 'Lubos na sumasang-ayon',
      option2: 'Medyo sumasang-ayon',
      option3: 'Hindi tiyak',
      option4: 'Medyo hindi sumasang-ayon',
      option5: 'Hindi gaanong sumasang-ayon',
      option6: 'Hindi sumasang-ayon'
    },
    
    understanding: {
      option1: 'Napakadaling maintindihan',
      option2: 'Medyo madaling maintindihan',
      option3: 'Hindi tiyak',
      option4: 'Medyo mahirap maintindihan',
      option5: 'Mahirap maintindihan',
      option6: 'Hindi maintindihan'
    },
    
    familiarity: {
      option1: 'Lubos na nasanay',
      option2: 'Medyo nasanay',
      option3: 'Hindi tiyak',
      option4: 'Medyo hindi pa nasanay',
      option5: 'Hindi pa gaanong nasanay',
      option6: 'Hindi pa nasanay'
    },
    
    availability: {
      option1: 'Marami',
      option2: 'May kaunti',
      option3: 'Hindi tiyak',
      option4: 'Hindi gaanong marami',
      option5: 'Halos wala',
      option6: 'Wala'
    },
    
    negative: {
      option1: 'Wala',
      option2: 'Halos wala',
      option3: 'Hindi tiyak',
      option4: 'Paminsan-minsan',
      option5: 'Madalas',
      option6: 'Lagi'
    },
    
    errorEmployeeCode: 'Pumili ng code ng empleyado',
    errorNationality: 'Pumili ng nasyonalidad',
    errorAllQuestions: 'Sagutin ang lahat ng tanong',
    errorDuplicate: 'Ang code ng empleyado {code} ay sumagot na ngayong buwan ({date})',
    
    completionTitle: 'Salamat sa iyong kooperasyon!',
    completionMessage: 'Ang iyong sagot ay ligtas na nai-save',
    completionAutoClose: 'Ang page na ito ay kusang magsasara',
    completionRemaining: 'Natitira',
    completionSeconds: 'segundo',
    
    footerInfo: 'Oras: Mga 5-10 minuto'
  },

  // ===========================
  // インドネシア語
  // ===========================
  id: {
    title: 'Jawab dengan tenang | Survei Tempat Kerja',
    languageLabel: 'Pilih Bahasa',
    anonymousMessage: 'Nama Anda tidak akan dicatat',
    anonymousSubMessage: 'Jawablah dengan jujur',
    employeeCodeLabel: 'Kode Karyawan',
    employeeCodePlaceholder: 'Pilih nomor 1 sampai 20',
    nationalityLabel: 'Kebangsaan',
    nationalityPlaceholder: 'Pilih kebangsaan',
    startButton: 'Mulai Survei',
    submitButton: 'Lihat Hasil',
    
    nationalities: {
      vietnam: 'Vietnam',
      cambodia: 'Kamboja',
      india: 'India',
      philippines: 'Filipina',
      laos: 'Laos',
      mongolia: 'Mongolia',
      bangladesh: 'Bangladesh',
      srilanka: 'Sri Lanka',
      myanmar: 'Myanmar',
      bhutan: 'Bhutan',
      uzbekistan: 'Uzbekistan',
      pakistan: 'Pakistan',
      thailand: 'Thailand',
      indonesia: 'Indonesia',
      nepal: 'Nepal',
      china: 'Tiongkok'
    },
    
    categories: {
      work: '1. Pekerjaan & Lingkungan Kerja',
      salary: '2. Gaji & Tunjangan',
      family: '3. Keluarga & Pribadi',
      relationship: '4. Hubungan Antar Manusia',
      communication: '5. Bahasa Jepang & Komunikasi',
      culture: '6. Budaya & Nilai',
      living: '7. Lingkungan Hidup',
      career: '8. Karir & Masa Depan'
    },
    
    questions: {
      q1: 'Apakah isi pekerjaan sesuai dengan Anda?',
      q2: 'Apakah tempat kerja aman?',
      q3: 'Apakah hari libur dan jam kerja tepat?',
      q4: 'Apakah suasana tempat kerja nyaman untuk bekerja?',
      q5: 'Apakah Anda puas dengan jumlah gaji?',
      q6: 'Apakah uang lembur dan tunjangan diterima dengan benar?',
      q7: 'Apakah sistem seperti asuransi dan cuti memadai?',
      q8: 'Apakah bekerja di perusahaan ini memberikan uang yang cukup untuk hidup?',
      q9: 'Apakah Anda punya cukup waktu untuk menghubungi keluarga?',
      q10: 'Apakah Anda mampu mengirim uang ke keluarga?',
      q11: 'Apakah Anda punya cukup waktu pribadi (libur dan privasi)?',
      q12: 'Apakah Anda ingin membawa keluarga ke Jepang di masa depan?',
      q13: 'Apakah hubungan dengan peserta pelatihan lain baik?',
      q14: 'Apakah atasan dan rekan kerja Jepang mendengarkan Anda?',
      q15: 'Apakah peserta pelatihan lain membantu Anda saat kesulitan?',
      q16: 'Apakah ada bullying atau diskriminasi di tempat kerja?',
      q17: 'Apakah Anda kesulitan berbicara dalam bahasa Jepang?',
      q18: 'Apakah penjelasan dan instruksi pekerjaan mudah dipahami?',
      q19: 'Apakah mudah bertanya ketika tidak mengerti?',
      q20: 'Apakah perusahaan membantu Anda belajar bahasa Jepang?',
      q21: 'Apakah ada orang yang bisa konsultasi dalam bahasa ibu (penerjemah, senior)?',
      q22: 'Apakah Anda terbiasa dengan budaya dan kebiasaan Jepang?',
      q23: 'Apakah Anda kesulitan karena perbedaan budaya dalam pekerjaan?',
      q24: 'Apakah tempat tinggal (asrama, apartemen) nyaman?',
      q25: 'Apakah biaya hidup tepat dibanding gaji?',
      q26: 'Apakah Anda kesulitan dalam hidup di Jepang?',
      q27: 'Apakah perusahaan mendukung kehidupan Anda?',
      q28: 'Apakah Anda puas dengan lingkungan hidup (ukuran kamar, fasilitas) di asrama atau rumah?',
      q29: 'Apakah hidup di Jepang aman dan nyaman?',
      q30: 'Apakah Anda belajar teknik dan pengetahuan dari pekerjaan saat ini?',
      q31: 'Apakah Anda merasa usaha Anda dihargai dan diperlakukan lebih baik?',
      q32: 'Apakah Anda ingin bekerja lama di perusahaan ini?',
      q33: 'Apakah perusahaan atau serikat membantu perpanjangan dan prosedur visa?',
      q34: 'Apakah Anda belajar teknik yang berguna setelah kembali ke negara asal dari bekerja di perusahaan ini?',
      q35: 'Apakah Anda akan merekomendasikan teman di negara asal untuk bekerja di perusahaan ini?'
    },
    
    satisfaction: {
      option1: 'Sangat puas',
      option2: 'Cukup puas',
      option3: 'Tidak yakin',
      option4: 'Agak tidak puas',
      option5: 'Tidak puas',
      option6: 'Sangat tidak puas'
    },
    
    desire: {
      option1: 'Sangat setuju',
      option2: 'Cukup setuju',
      option3: 'Tidak yakin',
      option4: 'Agak tidak setuju',
      option5: 'Tidak setuju',
      option6: 'Sangat tidak setuju'
    },
    
    understanding: {
      option1: 'Sangat mudah dipahami',
      option2: 'Cukup mudah dipahami',
      option3: 'Tidak yakin',
      option4: 'Agak sulit dipahami',
      option5: 'Sulit dipahami',
      option6: 'Tidak bisa dipahami'
    },
    
    familiarity: {
      option1: 'Sangat terbiasa',
      option2: 'Cukup terbiasa',
      option3: 'Tidak yakin',
      option4: 'Agak belum terbiasa',
      option5: 'Belum terbiasa',
      option6: 'Sangat belum terbiasa'
    },
    
    availability: {
      option1: 'Sangat banyak',
      option2: 'Cukup banyak',
      option3: 'Tidak yakin',
      option4: 'Agak sedikit',
      option5: 'Hampir tidak ada',
      option6: 'Tidak ada'
    },
    
    negative: {
      option1: 'Tidak ada',
      option2: 'Hampir tidak ada',
      option3: 'Tidak yakin',
      option4: 'Kadang-kadang',
      option5: 'Sering',
      option6: 'Selalu'
    },
    
    errorEmployeeCode: 'Pilih kode karyawan',
    errorNationality: 'Pilih kebangsaan',
    errorAllQuestions: 'Jawab semua pertanyaan',
    errorDuplicate: 'Kode karyawan {code} sudah menjawab bulan ini ({date})',
    
    completionTitle: 'Terima kasih atas kerja sama Anda!',
    completionMessage: 'Jawaban Anda telah disimpan dengan aman',
    completionAutoClose: 'Halaman ini akan tertutup otomatis',
    completionRemaining: 'Tersisa',
    completionSeconds: 'detik',
    
    footerInfo: 'Waktu: Sekitar 5-10 menit'
  },

  // ===========================
  // タイ語
  // ===========================
  th: {
    title: 'ตอบด้วยความมั่นใจ | แบบสำรวจที่ทำงาน',
    languageLabel: 'เลือกภาษา',
    anonymousMessage: 'ชื่อของคุณจะไม่ถูกบันทึก',
    anonymousSubMessage: 'กรุณาตอบอย่างตรงไปตรงมา',
    employeeCodeLabel: 'รหัสพนักงาน',
    employeeCodePlaceholder: 'เลือกหมายเลข 1 ถึง 20',
    nationalityLabel: 'สัญชาติ',
    nationalityPlaceholder: 'กรุณาเลือกสัญชาติ',
    startButton: 'เริ่มแบบสำรวจ',
    submitButton: 'ดูผลลัพธ์',
    
    nationalities: {
      vietnam: 'เวียดนาม',
      cambodia: 'กัมพูชา',
      india: 'อินเดีย',
      philippines: 'ฟิลิปปินส์',
      laos: 'ลาว',
      mongolia: 'มองโกเลีย',
      bangladesh: 'บังกลาเทศ',
      srilanka: 'ศรีลังกา',
      myanmar: 'เมียนมาร์',
      bhutan: 'ภูฏาน',
      uzbekistan: 'อุซเบกิสถาน',
      pakistan: 'ปากีสถาน',
      thailand: 'ไทย',
      indonesia: 'อินโดนีเซีย',
      nepal: 'เนปาล',
      china: 'จีน'
    },
    
    categories: {
      work: '1. งานและสภาพแวดล้อมการทำงาน',
      salary: '2. เงินเดือนและสวัสดิการ',
      family: '3. ครอบครัวและเรื่องส่วนตัว',
      relationship: '4. ความสัมพันธ์ระหว่างบุคคล',
      communication: '5. ภาษาญี่ปุ่นและการสื่อสาร',
      culture: '6. วัฒนธรรมและค่านิยม',
      living: '7. สภาพแวดล้อมการใช้ชีวิต',
      career: '8. อาชีพและอนาคต'
    },
    
    questions: {
      q1: 'เนื้อหางานเหมาะกับคุณหรือไม่?',
      q2: 'คุณคิดว่าสถานที่ทำงานปลอดภัยหรือไม่?',
      q3: 'วันหยุดและเวลาทำงานเหมาะสมหรือไม่?',
      q4: 'บรรยากาศที่ทำงานเอื้อต่อการทำงานหรือไม่?',
      q5: 'คุณพอใจกับจำนวนเงินเดือนหรือไม่?',
      q6: 'คุณได้รับค่าล่วงเวลาและเบี้ยเลี้ยงอย่างถูกต้องหรือไม่?',
      q7: 'ระบบประกันและวันหยุดเพียงพอหรือไม่?',
      q8: 'การทำงานที่บริษัทนี้ทำให้คุณได้เงินเพียงพอสำหรับชีวิตหรือไม่?',
      q9: 'คุณมีเวลาติดต่อกับครอบครัวเพียงพอหรือไม่?',
      q10: 'คุณมีเงินส่งกลับให้ครอบครัวหรือไม่?',
      q11: 'คุณมีเวลาส่วนตัว (หยุดพักและชีวิตส่วนตัว) เพียงพอหรือไม่?',
      q12: 'คุณอยากพาครอบครัวมาญี่ปุ่นในอนาคตหรือไม่?',
      q13: 'ความสัมพันธ์กับเพื่อนฝึกงานคนอื่นดีหรือไม่?',
      q14: 'หัวหน้าและเพื่อนร่วมงานชาวญี่ปุ่นฟังคุณหรือไม่?',
      q15: 'เมื่อมีปัญหา เพื่อนฝึกงานคนอื่นช่วยคุณหรือไม่?',
      q16: 'มีการรังแกหรือเลือกปฏิบัติที่ทำงานหรือไม่?',
      q17: 'คุณมีปัญหาในการพูดภาษาญี่ปุ่นหรือไม่?',
      q18: 'คำอธิบายและคำสั่งงานเข้าใจง่ายหรือไม่?',
      q19: 'คุณถามเมื่อไม่เข้าใจได้ง่ายหรือไม่?',
      q20: 'บริษัทช่วยคุณเรียนภาษาญี่ปุ่นหรือไม่?',
      q21: 'มีคนที่ปรึกษาได้ในภาษาแม่ (ล่าม รุ่นพี่) หรือไม่?',
      q22: 'คุณคุ้นเคยกับวัฒนธรรมและขนบธรรมเนียมญี่ปุ่นหรือไม่?',
      q23: 'คุณมีปัญหาเรื่องความแตกต่างทางวัฒนธรรมในงานหรือไม่?',
      q24: 'ที่พักอาศัย (หอพัก อพาร์ทเมนต์) สะดวกสบายหรือไม่?',
      q25: 'ค่าใช้จ่ายในการดำรงชีพเหมาะสมกับเงินเดือนหรือไม่?',
      q26: 'คุณมีปัญหาในการใช้ชีวิตในญี่ปุ่นหรือไม่?',
      q27: 'บริษัทสนับสนุนชีวิตของคุณหรือไม่?',
      q28: 'คุณพอใจกับสภาพแวดล้อมการใช้ชีวิต (ขนาดห้อง สิ่งอำนวยความสะดวก) ในหอพักหรือบ้านหรือไม่?',
      q29: 'ชีวิตในญี่ปุ่นปลอดภัยและสะดวกสบายหรือไม่?',
      q30: 'คุณได้เรียนรู้เทคนิคและความรู้จากงานปัจจุบันหรือไม่?',
      q31: 'คุณรู้สึกว่าความพยายามของคุณได้รับการประเมินและได้รับการปฏิบัติที่ดีขึ้นหรือไม่?',
      q32: 'คุณอยากทำงานที่บริษัทนี้นานๆ หรือไม่?',
      q33: 'บริษัทหรือสหภาพช่วยเรื่องการต่ออายุและขั้นตอนวีซ่า (สถานะการพำนัก) หรือไม่?',
      q34: 'คุณกำลังเรียนรู้เทคนิคที่เป็นประโยชน์เมื่อกลับประเทศจากการทำงานที่บริษัทนี้หรือไม่?',
      q35: 'คุณคิดว่าคุณจะแนะนำเพื่อนในประเทศให้มาทำงานที่บริษัทนี้หรือไม่?'
    },
    
    satisfaction: {
      option1: 'พอใจมาก',
      option2: 'ค่อนข้างพอใจ',
      option3: 'ไม่แน่ใจ',
      option4: 'ค่อนข้างไม่พอใจ',
      option5: 'ไม่พอใจ',
      option6: 'ไม่พอใจเลย'
    },
    
    desire: {
      option1: 'เห็นด้วยอย่างยิ่ง',
      option2: 'ค่อนข้างเห็นด้วย',
      option3: 'ไม่แน่ใจ',
      option4: 'ค่อนข้างไม่เห็นด้วย',
      option5: 'ไม่เห็นด้วย',
      option6: 'ไม่เห็นด้วยเลย'
    },
    
    understanding: {
      option1: 'เข้าใจง่ายมาก',
      option2: 'ค่อนข้างเข้าใจง่าย',
      option3: 'ไม่แน่ใจ',
      option4: 'ค่อนข้างยากเข้าใจ',
      option5: 'ยากเข้าใจ',
      option6: 'ไม่เข้าใจเลย'
    },
    
    familiarity: {
      option1: 'คุ้นเคยมาก',
      option2: 'ค่อนข้างคุ้นเคย',
      option3: 'ไม่แน่ใจ',
      option4: 'ค่อนข้างไม่คุ้นเคย',
      option5: 'ไม่คุ้นเคย',
      option6: 'ไม่คุ้นเคยเลย'
    },
    
    availability: {
      option1: 'มีมาก',
      option2: 'มีค่อนข้างมาก',
      option3: 'ไม่แน่ใจ',
      option4: 'มีน้อย',
      option5: 'แทบไม่มี',
      option6: 'ไม่มีเลย'
    },
    
    negative: {
      option1: 'ไม่มีเลย',
      option2: 'แทบไม่มี',
      option3: 'ไม่แน่ใจ',
      option4: 'บางครั้ง',
      option5: 'บ่อยครั้ง',
      option6: 'ทุกครั้ง'
    },
    
    errorEmployeeCode: 'กรุณาเลือกรหัสพนักงาน',
    errorNationality: 'กรุณาเลือกสัญชาติ',
    errorAllQuestions: 'กรุณาตอบคำถามทั้งหมด',
    errorDuplicate: 'รหัสพนักงาน {code} ตอบแล้วในเดือนนี้ ({date})',
    
    completionTitle: 'ขอบคุณสำหรับความร่วมมือ!',
    completionMessage: 'คำตอบของคุณถูกบันทึกอย่างปลอดภัย',
    completionAutoClose: 'หน้านี้จะปิดอัตโนมัติ',
    completionRemaining: 'เหลืออีก',
    completionSeconds: 'วินาที',
    
    footerInfo: 'เวลา: ประมาณ 5-10 นาที'
  },

  // ===========================
  // ネパール語
  // ===========================
  ne: {
    title: 'निश्चिन्त भएर जवाफ दिनुहोस् | कार्यस्थल सर्वेक्षण',
    languageLabel: 'भाषा छान्नुहोस्',
    anonymousMessage: 'तपाईंको नाम रेकर्ड हुने छैन',
    anonymousSubMessage: 'कृपया इमानदारीपूर्वक जवाफ दिनुहोस्',
    employeeCodeLabel: 'कर्मचारी कोड',
    employeeCodePlaceholder: '1 देखि 20 सम्मको नम्बर छान्नुहोस्',
    nationalityLabel: 'राष्ट्रियता',
    nationalityPlaceholder: 'कृपया राष्ट्रियता छान्नुहोस्',
    startButton: 'सर्वेक्षण सुरु गर्नुहोस्',
    submitButton: 'नतिजा हेर्नुहोस्',
    
    nationalities: {
      vietnam: 'भियतनाम',
      cambodia: 'कम्बोडिया',
      india: 'भारत',
      philippines: 'फिलिपिन्स',
      laos: 'लाओस',
      mongolia: 'मंगोलिया',
      bangladesh: 'बंगलादेश',
      srilanka: 'श्रीलंका',
      myanmar: 'म्यानमार',
      bhutan: 'भुटान',
      uzbekistan: 'उज्बेकिस्तान',
      pakistan: 'पाकिस्तान',
      thailand: 'थाइल्यान्ड',
      indonesia: 'इन्डोनेसिया',
      nepal: 'नेपाल',
      china: 'चीन'
    },
    
    categories: {
      work: '1. काम र कार्यस्थल वातावरण',
      salary: '2. तलब र सुविधा',
      family: '3. परिवार र व्यक्तिगत',
      relationship: '4. मानवीय सम्बन्ध',
      communication: '5. जापानी भाषा र सञ्चार',
      culture: '6. संस्कृति र मूल्यमान्यता',
      living: '7. जीवन वातावरण',
      career: '8. करियर र भविष्य'
    },
    
    questions: {
      q1: 'कामको सामग्री तपाईंलाई उपयुक्त छ?',
      q2: 'के तपाईंलाई कार्यस्थल सुरक्षित लाग्छ?',
      q3: 'के बिदा र काम गर्ने समय उपयुक्त छ?',
      q4: 'के कार्यस्थलको वातावरण काम गर्न सजिलो छ?',
      q5: 'के तपाईं तलबको रकमसँग सन्तुष्ट हुनुहुन्छ?',
      q6: 'के ओभरटाइम र भत्ता ठीकसँग प्राप्त गर्नुहुन्छ?',
      q7: 'के बीमा र बिदा जस्ता प्रणाली पर्याप्त छ?',
      q8: 'के यस कम्पनीमा काम गरेर जीवनको लागि आवश्यक पैसा पाउनुहुन्छ?',
      q9: 'के परिवारसँग सम्पर्क गर्ने समय पर्याप्त छ?',
      q10: 'के परिवारलाई पैसा पठाउने क्षमता छ?',
      q11: 'के आफ्नो समय (बिदा र व्यक्तिगत) पर्याप्त छ?',
      q12: 'के तपाईं भविष्यमा परिवारलाई जापानमा ल्याउन चाहनुहुन्छ?',
      q13: 'के अन्य प्रशिक्षार्थीहरूसँगको सम्बन्ध राम्रो छ?',
      q14: 'के जापानी मालिक र सहकर्मीहरूले तपाईंको कुरा सुन्छन्?',
      q15: 'के समस्यामा परेको बेला अन्य प्रशिक्षार्थीहरूले मद्दत गर्छन्?',
      q16: 'के कार्यस्थलमा धम्की वा भेदभाव हुन्छ?',
      q17: 'के जापानी भाषामा कुरा गर्दा समस्या हुन्छ?',
      q18: 'के कामको व्याख्या र निर्देशन बुझ्न सजिलो छ?',
      q19: 'के नबुझेको कुरा सोध्न सजिलो छ?',
      q20: 'के कम्पनीले तपाईंलाई जापानी भाषा सिक्न मद्दत गर्छ?',
      q21: 'के मातृभाषामा परामर्श लिन सक्ने व्यक्ति (दोभासे, वरिष्ठ) छ?',
      q22: 'के तपाईं जापानी संस्कृति र चलनमा अभ्यस्त हुनुभएको छ?',
      q23: 'के कामको समयमा सांस्कृतिक भिन्नताले समस्या हुन्छ?',
      q24: 'के बस्ने ठाउँ (छात्रावास, अपार्टमेन्ट) सहज छ?',
      q25: 'के जीवन खर्च तलबको तुलनामा उपयुक्त छ?',
      q26: 'के जापानमा जीवन बिताउँदा समस्या हुन्छ?',
      q27: 'के कम्पनीले जीवनको सहयोग गर्छ?',
      q28: 'के तपाईं छात्रावास वा घरको जीवन वातावरण (कोठाको आकार, सुविधा) सँग सन्तुष्ट हुनुहुन्छ?',
      q29: 'के जापानमा जीवन सुरक्षित र सहज छ?',
      q30: 'के तपाईं हालको कामबाट प्रविधि र ज्ञान सिक्दै हुनुहुन्छ?',
      q31: 'के तपाईंलाई लाग्छ कि तपाईंको प्रयासले मूल्याङ्कन र उपचारमा सुधार ल्याउँछ?',
      q32: 'के तपाईं यस कम्पनीमा लामो समयसम्म काम गर्न चाहनुहुन्छ?',
      q33: 'के कम्पनी वा युनियनले भिसा (बसोबासको अधिकार) नवीकरण र प्रक्रियामा मद्दत गर्छ?',
      q34: 'के तपाईं यस कम्पनीमा काम गरेर स्वदेश फर्किएपछि उपयोगी हुने प्रविधि सिक्दै हुनुहुन्छ?',
      q35: 'के तपाईं स्वदेशका साथीहरूलाई "यस कम्पनीमा काम गर्नु राम्रो हो" भन्नुहुन्छ?'
    },
    
    satisfaction: {
      option1: 'धेरै सन्तुष्ट',
      option2: 'केही सन्तुष्ट',
      option3: 'अनिश्चित',
      option4: 'केही असन्तुष्ट',
      option5: 'असन्तुष्ट',
      option6: 'पूर्ण असन्तुष्ट'
    },
    
    desire: {
      option1: 'धेरै सहमत',
      option2: 'केही सहमत',
      option3: 'अनिश्चित',
      option4: 'केही असहमत',
      option5: 'असहमत',
      option6: 'पूर्ण असहमत'
    },
    
    understanding: {
      option1: 'धेरै सजिलो',
      option2: 'केही सजिलो',
      option3: 'अनिश्चित',
      option4: 'केही गाह्रो',
      option5: 'गाह्रो',
      option6: 'पूर्ण गाह्रो'
    },
    
    familiarity: {
      option1: 'धेरै अभ्यस्त',
      option2: 'केही अभ्यस्त',
      option3: 'अनिश्चित',
      option4: 'केही अनभ्यस्त',
      option5: 'अनभ्यस्त',
      option6: 'पूर्ण अनभ्यस्त'
    },
    
    availability: {
      option1: 'धेरै छ',
      option2: 'केही छ',
      option3: 'अनिश्चित',
      option4: 'थोरै छ',
      option5: 'लगभग छैन',
      option6: 'छैन'
    },
    
    negative: {
      option1: 'छैन',
      option2: 'लगभग छैन',
      option3: 'अनिश्चित',
      option4: 'कहिलेकाहीं',
      option5: 'प्रायः',
      option6: 'सधैं'
    },
    
    errorEmployeeCode: 'कृपया कर्मचारी कोड छान्नुहोस्',
    errorNationality: 'कृपया राष्ट्रियता छान्नुहोस्',
    errorAllQuestions: 'कृपया सबै प्रश्नको जवाफ दिनुहोस्',
    errorDuplicate: 'कर्मचारी कोड {code} ले यस महिना पहिले नै जवाफ दिइसकेको छ ({date})',
    
    completionTitle: 'तपाईंको सहयोगको लागि धन्यवाद!',
    completionMessage: 'तपाईंको जवाफ सुरक्षित रूपमा सुरक्षित गरिएको छ',
    completionAutoClose: 'यो पृष्ठ स्वतः बन्द हुनेछ',
    completionRemaining: 'बाँकी',
    completionSeconds: 'सेकेन्ड',
    
    footerInfo: 'समय: लगभग 5-10 मिनेट'
  },

  // ===========================
  // ヒンディー語
  // ===========================
  hi: {
    title: 'बेझिझक उत्तर दें | कार्यस्थल सर्वेक्षण',
    languageLabel: 'भाषा चुनें',
    anonymousMessage: 'आपका नाम रिकॉर्ड नहीं किया जाएगा',
    anonymousSubMessage: 'कृपया ईमानदारी से उत्तर दें',
    employeeCodeLabel: 'कर्मचारी कोड',
    employeeCodePlaceholder: '1 से 20 तक का नंबर चुनें',
    nationalityLabel: 'राष्ट्रीयता',
    nationalityPlaceholder: 'कृपया राष्ट्रीयता चुनें',
    startButton: 'सर्वेक्षण शुरू करें',
    submitButton: 'परिणाम देखें',
    
    nationalities: {
      vietnam: 'वियतनाम',
      cambodia: 'कंबोडिया',
      india: 'भारत',
      philippines: 'फिलीपींस',
      laos: 'लाओस',
      mongolia: 'मंगोलिया',
      bangladesh: 'बांग्लादेश',
      srilanka: 'श्रीलंका',
      myanmar: 'म्यांमार',
      bhutan: 'भूटान',
      uzbekistan: 'उज़्बेकिस्तान',
      pakistan: 'पाकिस्तान',
      thailand: 'थाईलैंड',
      indonesia: 'इंडोनेशिया',
      nepal: 'नेपाल',
      china: 'चीन'
    },
    
    categories: {
      work: '1. कार्य और कार्यस्थल वातावरण',
      salary: '2. वेतन और लाभ',
      family: '3. परिवार और व्यक्तिगत',
      relationship: '4. मानवीय संबंध',
      communication: '5. जापानी भाषा और संचार',
      culture: '6. संस्कृति और मूल्य',
      living: '7. रहने का वातावरण',
      career: '8. कैरियर और भविष्य'
    },
    
    questions: {
      q1: 'क्या काम की सामग्री आपके लिए उपयुक्त है?',
      q2: 'क्या आपको कार्यस्थल सुरक्षित लगता है?',
      q3: 'क्या अवकाश के दिन और काम के घंटे उचित हैं?',
      q4: 'क्या कार्यस्थल का माहौल काम करने में आसान है?',
      q5: 'क्या आप वेतन की राशि से संतुष्ट हैं?',
      q6: 'क्या आपको ओवरटाइम और भत्ता ठीक से मिल रहा है?',
      q7: 'क्या बीमा और अवकाश जैसी व्यवस्थाएं पर्याप्त हैं?',
      q8: 'क्या इस कंपनी में काम करके आपको जीवन के लिए आवश्यक पैसे मिल रहे हैं?',
      q9: 'क्या परिवार से संपर्क करने का समय पर्याप्त है?',
      q10: 'क्या परिवार को पैसे भेजने की क्षमता है?',
      q11: 'क्या अपना समय (आराम और निजी) पर्याप्त है?',
      q12: 'क्या आप भविष्य में परिवार को जापान बुलाना चाहते हैं?',
      q13: 'क्या अन्य प्रशिक्षुओं के साथ संबंध अच्छे हैं?',
      q14: 'क्या जापानी मालिक और सहकर्मी आपकी बात सुनते हैं?',
      q15: 'क्या परेशानी में अन्य प्रशिक्षु आपकी मदद करते हैं?',
      q16: 'क्या कार्यस्थल पर धमकाना या भेदभाव होता है?',
      q17: 'क्या जापानी में बातचीत करने में परेशानी होती है?',
      q18: 'क्या काम की व्याख्या और निर्देश समझने में आसान हैं?',
      q19: 'क्या न समझने पर सवाल पूछना आसान है?',
      q20: 'क्या कंपनी जापानी भाषा सीखने में मदद करती है?',
      q21: 'क्या मातृभाषा में परामर्श लेने वाला व्यक्ति (दुभाषिया, वरिष्ठ) है?',
      q22: 'क्या आप जापानी संस्कृति और रीति-रिवाजों के अभ्यस्त हैं?',
      q23: 'क्या काम के दौरान सांस्कृतिक अंतर से परेशानी होती है?',
      q24: 'क्या रहने की जगह (छात्रावास, अपार्टमेंट) आरामदायक है?',
      q25: 'क्या जीवन-यापन की लागत वेतन की तुलना में उचित है?',
      q26: 'क्या जापान में जीवन में परेशानी होती है?',
      q27: 'क्या कंपनी जीवन में सहायता करती है?',
      q28: 'क्या आप छात्रावास या घर के रहने के वातावरण (कमरे का आकार, सुविधाएं) से संतुष्ट हैं?',
      q29: 'क्या जापान में जीवन सुरक्षित और आरामदायक है?',
      q30: 'क्या आप वर्तमान काम से तकनीक और ज्ञान सीख रहे हैं?',
      q31: 'क्या आपको लगता है कि आपके प्रयास से मूल्यांकन और व्यवहार बेहतर होता है?',
      q32: 'क्या आप इस कंपनी में लंबे समय तक काम करना चाहते हैं?',
      q33: 'क्या कंपनी या संघ वीजा (निवास की स्थिति) के नवीनीकरण और प्रक्रिया में मदद करता है?',
      q34: 'क्या आप इस कंपनी में काम करके मातृभूमि लौटने पर उपयोगी तकनीक सीख रहे हैं?',
      q35: 'क्या आप मातृभूमि के दोस्तों को "इस कंपनी में काम करना बेहतर है" कहेंगे?'
    },
    
    satisfaction: {
      option1: 'बहुत संतुष्ट',
      option2: 'कुछ हद तक संतुष्ट',
      option3: 'अनिश्चित',
      option4: 'कुछ हद तक असंतुष्ट',
      option5: 'असंतुष्ट',
      option6: 'पूर्ण असंतुष्ट'
    },
    
    desire: {
      option1: 'पूरी तरह सहमत',
      option2: 'कुछ हद तक सहमत',
      option3: 'अनिश्चित',
      option4: 'कुछ हद तक असहमत',
      option5: 'असहमत',
      option6: 'पूर्ण असहमत'
    },
    
    understanding: {
      option1: 'बहुत आसान',
      option2: 'कुछ हद तक आसान',
      option3: 'अनिश्चित',
      option4: 'कुछ हद तक कठिन',
      option5: 'कठिन',
      option6: 'पूर्ण कठिन'
    },
    
    familiarity: {
      option1: 'बहुत अभ्यस्त',
      option2: 'कुछ हद तक अभ्यस्त',
      option3: 'अनिश्चित',
      option4: 'कुछ हद तक अनभ्यस्त',
      option5: 'अनभ्यस्त',
      option6: 'पूर्ण अनभ्यस्त'
    },
    
    availability: {
      option1: 'बहुत है',
      option2: 'कुछ है',
      option3: 'अनिश्चित',
      option4: 'कम है',
      option5: 'लगभग नहीं है',
      option6: 'नहीं है'
    },
    
    negative: {
      option1: 'नहीं है',
      option2: 'लगभग नहीं है',
      option3: 'अनिश्चित',
      option4: 'कभी-कभी',
      option5: 'अक्सर',
      option6: 'हमेशा'
    },
    
    errorEmployeeCode: 'कृपया कर्मचारी कोड चुनें',
    errorNationality: 'कृपया राष्ट्रीयता चुनें',
    errorAllQuestions: 'कृपया सभी प्रश्नों का उत्तर दें',
    errorDuplicate: 'कर्मचारी कोड {code} ने इस महीने पहले ही उत्तर दिया है ({date})',
    
    completionTitle: 'आपके सहयोग के लिए धन्यवाद!',
    completionMessage: 'आपका उत्तर सुरक्षित रूप से सहेजा गया है',
    completionAutoClose: 'यह पृष्ठ स्वचालित रूप से बंद हो जाएगा',
    completionRemaining: 'शेष',
    completionSeconds: 'सेकंड',
    
    footerInfo: 'समय: लगभग 5-10 मिनट'
  }
  // ===========================
  // ミャンマー語
  // ===========================
  my: {
    title: 'စိတ်ချစွာဖြေဆိုနိုင်ပါသည် | လုပ်ငန်းခွင်စစ်တမ်း',
    languageLabel: 'ဘာသာစကားရွေးချယ်ပါ',
    anonymousMessage: 'သင့်အမည်ကို မှတ်တမ်းတင်မည်မ​ဟုတ်ပါ',
    anonymousSubMessage: 'စိတ်ချစွာ ရိုးသားစွာ ဖြေဆိုပါ',
    employeeCodeLabel: 'ဝန်ထမ်းကုဒ်',
    employeeCodePlaceholder: '1 မှ 20 အထိ နံပါတ်ရွေးပါ',
    nationalityLabel: 'နိုင်ငံသား',
    nationalityPlaceholder: 'နိုင်ငံသားရွေးချယ်ပါ',
    startButton: 'စစ်တမ်းစတင်ပါ',
    submitButton: 'ရလဒ်ကြည့်ပါ',
    
    nationalities: {
      vietnam: 'ဗီယက်နမ်',
      cambodia: 'ကမ္ဘောဒီးယား',
      india: 'အိန္ဒိယ',
      philippines: 'ဖိလစ်ပိုင်',
      laos: 'လာအို',
      mongolia: 'မွန်ဂိုလီးယား',
      bangladesh: 'ဘင်္ဂလားဒေ့ရှ်',
      srilanka: 'သီရိလင်္ကာ',
      myanmar: 'မြန်မာ',
      bhutan: 'ဘူတန်',
      uzbekistan: 'ဥဇဘက်ကစ္စတန်',
      pakistan: 'ပါကစ္စတန်',
      thailand: 'ထိုင်း',
      indonesia: 'အင်ဒိုနီးရှား',
      nepal: 'နီပေါ',
      china: 'တရုတ်'
    },
    
    categories: {
      work: '1. အလုပ်နှင့် လုပ်ငန်းခွင်ပတ်ဝန်းကျင်',
      salary: '2. လစာနှင့် ခံစားခွင့်များ',
      family: '3. မိသားစုနှင့် ကိုယ်ရေးကိုယ်တာ',
      relationship: '4. လူမှုဆက်ဆံရေး',
      communication: '5. ဂျပန်ဘာသာစကားနှင့် ဆက်သွယ်ရေး',
      culture: '6. ယဉ်ကျေးမှုနှင့် တန်ဖိုးများ',
      living: '7. နေထိုင်မှုပတ်ဝန်းကျင်',
      career: '8. အသက်မွေးဝမ်းကျောင်းနှင့် အနာဂတ်'
    },
    
    questions: {
      q1: 'အလုပ်အကြောင်းအရာက သင့်အတွက် သင့်တော်ပါသလား?',
      q2: 'လုပ်ငန်းခွင်က ဘေးကင်းပါသလား?',
      q3: 'ရုံးပိတ်ရက်များနှင့် အလုပ်အချိန်များ သင့်တော်ပါသလား?',
      q4: 'လုပ်ငန်းခွင်ပတ်ဝန်းကျင်က အလုပ်လုပ်ရန် လွယ်ကူပါသလား?',
      q5: 'လစာပမာဏနှင့် ကျေနပ်ပါသလား?',
      q6: 'အချိန်ပို လစာနှင့် စရိတ်ထောက်ပံ့ကြေးများ ပြည့်စုံစွာ ရရှိပါသလား?',
      q7: 'အာမခံနှင့် ခွင့်ရက်များ စနစ်များ လုံလောက်ပါသလား?',
      q8: 'ဤကုမ္ပဏီတွင် အလုပ်လုပ်ခြင်းဖြင့် နေထိုင်ရန် လိုအပ်သော ငွေရရှိပါသလား?',
      q9: 'မိသားစုနှင့် ဆက်သွယ်ရန် အချိန် လုံလောက်ပါသလား?',
      q10: 'မိသားစုသို့ ငွေပို့ရန် စွမ်းရည်ရှိပါသလား?',
      q11: 'သင့်အချိန် (အားလပ်ရက်နှင့် ကိုယ်ရေးကိုယ်တာ) လုံလောက်ပါသလား?',
      q12: 'အနာဂတ်တွင် မိသားစုကို ဂျပန်သို့ ခေါ်ဆောင်လိုပါသလား?',
      q13: 'အခြား အလုပ်သင်များနှင့် ဆက်ဆံရေး ကောင်းပါသလား?',
      q14: 'ဂျပန် အကြီးအကဲများနှင့် လုပ်ဖော်ကိုင်ဖက်များက သင့်စကားကို နားထောင်ပါသလား?',
      q15: 'အခက်အခဲ ကြုံရသောအခါ အခြား အလုပ်သင်များက ကူညီပါသလား?',
      q16: 'လုပ်ငန်းခွင်တွင် အနိုင်ကျင့်ခြင်း သို့မဟုత် ခွဲခြားဆက်ဆံခြင်း ခံရပါသလား?',
      q17: 'ဂျပန်ဘာသာဖြင့် စကားပြောရာတွင် အခက်အခဲ ရှိပါသလား?',
      q18: 'အလုပ်၏ ရှင်းပြချက်နှင့် လမ်းညွှန်ချက်များ နားလည်ရလွယ်ပါသလား?',
      q19: 'နားမလည်သောအရာကို မေးခွန်းထုတ်ရန် လွယ်ကူပါသလား?',
      q20: 'ကုမ္ပဏီက ဂျပန်ဘာသာ လေ့လာရာတွင် ကူညီပါသလား?',
      q21: 'မိခင်ဘာသာဖြင့် တိုင်ပင်နိုင်သူ (စကားပြန်၊ အကြီးတန်း) ရှိပါသလား?',
      q22: 'ဂျပန်ယဉ်ကျေးမှုနှင့် ဓလေ့ထုံးတမ်းများကို ကျင့်သုံးပါသလား?',
      q23: 'အလုပ်တွင် ယဉ်ကျေးမှု ကွာခြားချက်ကြောင့် အခက်အခဲ ရှိပါသလား?',
      q24: 'နေထိုင်ရာနေရာ (အဆောင်၊ တိုက်ခန်း) သက်သောင့်သက်သာ ရှိပါသလား?',
      q25: 'နေထိုင်မှုကုန်ကျစရိတ်သည် လစာနှင့် သင့်တော်ပါသလား?',
      q26: 'ဂျပန်တွင် နေထိုင်ရာတွင် အခက်အခဲ ရှိပါသလား?',
      q27: 'ကုမ္ပဏီက နေထိုင်မှုကို ပံ့ပိုးပါသလား?',
      q28: 'အဆောင် သို့မဟုత် အိမ်တွင် နေထိုင်မှုပတ်ဝန်းကျင် (အခန်းအရွယ်အစား၊ အထောက်အကူပစ္စည်းများ) နှင့် ကျေနပ်ပါသလား?',
      q29: 'ဂျပန်တွင် နေထိုင်မှုသည် ဘေးကင်းပြီး သက်သောင့်သက်သာ ရှိပါသလား?',
      q30: 'လက်ရှိအလုပ်မှ နည်းပညာနှင့် အသိပညာ သင်ယူနေပါသလား?',
      q31: 'သင့်ကြိုးစားမှုက အကဲဖြတ်မှုနှင့် ဆက်ဆံမှုကို ပိုကောင်းစေသည်ဎ ခံစားရပါသလား?',
      q32: 'ဤကုမ္ပဏီတွင် ကြာရှည်စွာ အလုပ်လုပ်လိုပါသလား?',
      q33: 'ကုမ္ပဏီ သို့မဟုတ် သမဂ္ဂက ဗီဇာ (နေထိုင်ခွင့်) သက်တမ်းတိုးနှင့် လုပ်ထုံးလုပ်နည်းများတွင် ကူညီပါသလား?',
      q34: 'ဤကုမ္ပဏီတွင် အလုပ်လုပ်ခြင်းဖြင့် မိခင်နိုင်ငံသို့ ပြန်ရောက်သောအခါ အသုံးဝင်သော နည်းပညာ သင်ယူနေပါသလား?',
      q35: 'မိခင်နိုင်ငံမှ သူငယ်ချင်းများကို "ဤကုမ္ပဏီတွင် အလုပ်လုပ်ရန် ပိုကောင်းသည်" ဟု ပြောနိုင်ပါသလား?'
    },
    
    satisfaction: {
      option1: 'အလွန် ကျေနပ်သည်',
      option2: 'အနည်းငယ် ကျေနပ်သည်',
      option3: 'မသေချာ',
      option4: 'အနည်းငယ် မကျေနပ်',
      option5: 'မကျေနပ်',
      option6: 'လုံးဝ မကျေနပ်'
    },
    
    desire: {
      option1: 'အလွန်သဘောတူ',
      option2: 'အနည်းငယ်သဘောတူ',
      option3: 'မသေချာ',
      option4: 'အနည်းငယ် မသဘောတူ',
      option5: 'မသဘောတူ',
      option6: 'လုံးဝမသဘောတူ'
    },
    
    understanding: {
      option1: 'အလွန်လွယ်ကူ',
      option2: 'အနည်းငယ်လွယ်ကူ',
      option3: 'မသေချာ',
      option4: 'အနည်းငယ်ခက်ခဲ',
      option5: 'ခက်ခဲ',
      option6: 'လုံးဝခက်ခဲ'
    },
    
    familiarity: {
      option1: 'အလွန်ကျင့်သုံး',
      option2: 'အနည်းငယ်ကျင့်သုံး',
      option3: 'မသေချာ',
      option4: 'အနည်းငယ်မကျင့်သုံး',
      option5: 'မကျင့်သုံး',
      option6: 'လုံးဝမကျင့်သုံး'
    },
    
    availability: {
      option1: 'အလွန်များ',
      option2: 'အနည်းငယ်များ',
      option3: 'မသေချာ',
      option4: 'အနည်းငယ်နည်း',
      option5: 'နည်း',
      option6: 'လုံးဝမရှိ'
    },
    
    negative: {
      option1: 'လုံးဝမရှိ',
      option2: 'နည်း',
      option3: 'မသေချာ',
      option4: 'တစ်ခါတစ်ရံ',
      option5: 'မကြာခဏ',
      option6: 'အမြဲတမ်း'
    },
    
    errorEmployeeCode: 'ဝန်ထမ်းကုဒ် ရွေးချယ်ပါ',
    errorNationality: 'နိုင်ငံသား ရွေးချယ်ပါ',
    errorAllQuestions: 'မေးခွန်းအားလုံး ဖြေဆိုပါ',
    errorDuplicate: 'ဝန်ထမ်းကုဒ် {code} သည် ယခုလတွင် ဖြေဆိုပြီးဖြစ်သည် ({date})',
    
    completionTitle: 'ပူးပေါင်းဆောင်ရွက်မှုအတွက် ကျေးဇူးတင်ပါသည်!',
    completionMessage: 'သင့်အဖြေကို လုံခြုံစွာ သိမ်းဆည်းပြီးပါပြီ',
    completionAutoClose: 'ဤစာမျက်နှာသည် အလိုအလျောက် ပိတ်သွားမည်',
    completionRemaining: 'ကျန်ရှိ',
    completionSeconds: 'စက္ကန့်',
    
    footerInfo: 'အချိန်: ခန့်မှန်းခြေ 5-10 မိနစ်'
  },

  // ===========================
  // クメール語 (カンボジア)
  // ===========================
  km: {
    title: 'សូមឆ្លើយតបដោយទំនុកចិត្ត | ការស្ទង់មតិនៅកន្លែងធ្វើការ',
    languageLabel: 'ជ្រើសរើសភាសា',
    anonymousMessage: 'ឈ្មោះរបស់អ្នកនឹងមិនត្រូវបានកត់ត្រាទេ',
    anonymousSubMessage: 'សូមឆ្លើយតបដោយស្មោះត្រង់',
    employeeCodeLabel: 'លេខកូដបុគ្គលិក',
    employeeCodePlaceholder: 'ជ្រើសរើសលេខពី 1 ដល់ 20',
    nationalityLabel: 'សញ្ជាតិ',
    nationalityPlaceholder: 'សូមជ្រើសរើសសញ្ជាតិ',
    startButton: 'ចាប់ផ្តើមការស្ទង់មតិ',
    submitButton: 'មើលលទ្ធផល',
    
    nationalities: {
      vietnam: 'វៀតណាម',
      cambodia: 'កម្ពុជា',
      india: 'ឥណ្ឌា',
      philippines: 'ហ្វីលីពីន',
      laos: 'ឡាវ',
      mongolia: 'ម៉ុងហ្គោលី',
      bangladesh: 'បង់ក្លាដែស',
      srilanka: 'ស្រីលង្កា',
      myanmar: 'មីយ៉ាន់ម៉ា',
      bhutan: 'ប៊ូតាន',
      uzbekistan: 'អ៊ូសបេគីស្ថាន',
      pakistan: 'ប៉ាគីស្ថាន',
      thailand: 'ថៃ',
      indonesia: 'ឥណ្ឌូនេស៊ី',
      nepal: 'នេប៉ាល់',
      china: 'ចិន'
    },
    
    categories: {
      work: '1. ការងារ និង បរិយាកាសធ្វើការ',
      salary: '2. ប្រាក់ឈ្នួល និង អត្ថប្រយោជន៍',
      family: '3. គ្រួសារ និង ផ្ទាល់ខ្លួន',
      relationship: '4. ទំនាក់ទំនងមនុស្ស',
      communication: '5. ភាសាជប៉ុន និង ការទំនាក់ទំនង',
      culture: '6. វប្បធម៌ និង តម្លៃ',
      living: '7. បរិយាកាសរស់នៅ',
      career: '8. អាជីព និង អនាគត'
    },
    
    questions: {
      q1: 'តើខ្លឹមសារការងារសមរម្យសម្រាប់អ្នកទេ?',
      q2: 'តើកន្លែងធ្វើការមានសុវត្ថិភាពទេ?',
      q3: 'តើថ្ងៃឈប់សម្រាក និង ម៉ោងធ្វើការសមរម្យទេ?',
      q4: 'តើបរិយាកាសនៅកន្លែងធ្វើការងាយស្រួលធ្វើការទេ?',
      q5: 'តើអ្នកពេញចិត្តនឹងចំនួនប្រាក់ឈ្នួលទេ?',
      q6: 'តើអ្នកទទួលបានប្រាក់បន្ថែមម៉ោង និង ប្រាក់ឧបត្ថម្ភត្រឹមត្រូវទេ?',
      q7: 'តើប្រព័ន្ធធានារ៉ាប់រង និង ការឈប់សម្រាកគ្រប់គ្រាន់ទេ?',
      q8: 'តើការធ្វើការនៅក្រុមហ៊ុននេះផ្តល់ប្រាក់គ្រប់គ្រាន់សម្រាប់ជីវិតទេ?',
      q9: 'តើអ្នកមានពេលវេលាគ្រប់គ្រាន់ក្នុងការទាក់ទងគ្រួសារទេ?',
      q10: 'តើអ្នកមានលទ្ធភាពផ្ញើប្រាក់ទៅគ្រួសារទេ?',
      q11: 'តើអ្នកមានពេលវេលាផ្ទាល់ខ្លួន (ឈប់សម្រាក និង ផ្ទាល់ខ្លួន) គ្រប់គ្រាន់ទេ?',
      q12: 'តើអ្នកចង់នាំគ្រួសារមកជប៉ុននាពេលអនាគតទេ?',
      q13: 'តើទំនាក់ទំនងជាមួយសិក្ខាកាមដទៃទៀតល្អទេ?',
      q14: 'តើថ្នាក់ដឹកនាំ និង សហការីជប៉ុនស្តាប់អ្នកទេ?',
      q15: 'តើនៅពេលមានបញ្ហា សិក្ខាកាមដទៃទៀតជួយអ្នកទេ?',
      q16: 'តើមានការរំលោភបំពាន ឬ ការរើសអើងនៅកន្លែងធ្វើការទេ?',
      q17: 'តើអ្នកមានបញ្ហាក្នុងការនិយាយភាសាជប៉ុនទេ?',
      q18: 'តើការពន្យល់ និង ការណែនាំការងារងាយយល់ទេ?',
      q19: 'តើងាយស្រួលសួរពេលមិនយល់ទេ?',
      q20: 'តើក្រុមហ៊ុនជួយអ្នករៀនភាសាជប៉ុនទេ?',
      q21: 'តើមាននរណាម្នាក់អាចពិគ្រោះជាភាសាកំណើត (អ្នកបកប្រែ, អ្នកចាស់) ទេ?',
      q22: 'តើអ្នកធ្លាប់ស្គាល់វប្បធម៌ និង ទម្លាប់របស់ជប៉ុនហើយទេ?',
      q23: 'តើអ្នកមានបញ្ហាដោយសារភាពខុសគ្នានៃវប្បធម៌ក្នុងការងារទេ?',
      q24: 'តើកន្លែងរស់នៅ (អន្តេវាសិកដ្ឋាន, អាផាតមិន) ងាយស្រួលទេ?',
      q25: 'តើថ្លៃចំណាយរស់នៅសមរម្យនឹងប្រាក់ឈ្នួលទេ?',
      q26: 'តើអ្នកមានបញ្ហាក្នុងការរស់នៅជប៉ុនទេ?',
      q27: 'តើក្រុមហ៊ុនគាំទ្រជីវិតរស់នៅរបស់អ្នកទេ?',
      q28: 'តើអ្នកពេញចិត្តនឹងបរិយាកាសរស់នៅ (ទំហំបន្ទប់, គ្រឿងបរិក្ខារ) នៅអន្តេវាសិកដ្ឋាន ឬ ផ្ទះទេ?',
      q29: 'តើជីវិតនៅជប៉ុនមានសុវត្ថិភាព និង ងាយស្រួលទេ?',
      q30: 'តើអ្នកកំពុងរៀនបច្ចេកទេស និង ចំណេះដឹងពីការងារបច្ចុប្បន្នទេ?',
      q31: 'តើអ្នកមានអារម្មណ៍ថាការខិតខំប្រឹងប្រែងរបស់អ្នកធ្វើឱ្យការវាយតម្លៃ និង ការប្រព្រឹត្តប្រសើរឡើងទេ?',
      q32: 'តើអ្នកចង់ធ្វើការនៅក្រុមហ៊ុននេះយូរទេ?',
      q33: 'តើក្រុមហ៊ុន ឬ សហជីពជួយក្នុងការបន្តថ្មី និង នីតិវិធីទិដ្ឋាការ (ស្ថានភាពស្នាក់នៅ) ទេ?',
      q34: 'តើអ្នកកំពុងរៀនបច្ចេកទេសដែលមានប្រយោជន៍បន្ទាប់ពីត្រលប់ទៅស្រុកកំណើតពីការធ្វើការនៅក្រុមហ៊ុននេះទេ?',
      q35: 'តើអ្នកនឹងណែនាំមិត្តភក្តិនៅស្រុកកំណើតឱ្យធ្វើការនៅក្រុមហ៊ុននេះទេ?'
    },
    
    satisfaction: {
      option1: 'ពេញចិត្តខ្លាំង',
      option2: 'ពេញចិត្តបន្តិច',
      option3: 'មិនប្រាកដ',
      option4: 'មិនសូវពេញចិត្ត',
      option5: 'មិនពេញចិត្ត',
      option6: 'មិនពេញចិត្តទាល់តែសោះ'
    },
    
    desire: {
      option1: 'យល់ស្របខ្លាំង',
      option2: 'យល់ស្របបន្តិច',
      option3: 'មិនប្រាកដ',
      option4: 'មិនសូវយល់ស្រប',
      option5: 'មិនយល់ស្រប',
      option6: 'មិនយល់ស្របទាល់តែសោះ'
    },
    
    understanding: {
      option1: 'យល់ស្រួល',
      option2: 'យល់បន្តិច',
      option3: 'មិនប្រាកដ',
      option4: 'មិនសូវយល់',
      option5: 'លំបាកយល់',
      option6: 'មិនយល់ទាល់តែសោះ'
    },
    
    familiarity: {
      option1: 'ធ្លាប់ស្គាល់ខ្លាំង',
      option2: 'ធ្លាប់ស្គាល់បន្តិច',
      option3: 'មិនប្រាកដ',
      option4: 'មិនសូវធ្លាប់ស្គាល់',
      option5: 'មិនធ្លាប់ស្គាល់',
      option6: 'មិនធ្លាប់ស្គាល់ទាល់តែសោះ'
    },
    
    availability: {
      option1: 'មានច្រើន',
      option2: 'មានបន្តិច',
      option3: 'មិនប្រាកដ',
      option4: 'មានតិច',
      option5: 'ស្ទើរតែគ្មាន',
      option6: 'គ្មានទាល់តែសោះ'
    },
    
    negative: {
      option1: 'គ្មានទាល់តែសោះ',
      option2: 'ស្ទើរតែគ្មាន',
      option3: 'មិនប្រាកដ',
      option4: 'ពេលខ្លះ',
      option5: 'ជាញឹកញាប់',
      option6: 'រហូត'
    },
    
    errorEmployeeCode: 'សូមជ្រើសរើសលេខកូដបុគ្គលិក',
    errorNationality: 'សូមជ្រើសរើសសញ្ជាតិ',
    errorAllQuestions: 'សូមឆ្លើយសំណួរទាំងអស់',
    errorDuplicate: 'លេខកូដបុគ្គលិក {code} បានឆ្លើយក្នុងខែនេះរួចហើយ ({date})',
    
    completionTitle: 'សូមអរគុណចំពោះការសហការ!',
    completionMessage: 'ចម្លើយរបស់អ្នកត្រូវបានរក្សាទុកដោយសុវត្ថិភាព',
    completionAutoClose: 'ទំព័រនេះនឹងបិទដោយស្វ័យប្រវត្តិ',
    completionRemaining: 'នៅសល់',
    completionSeconds: 'វិនាទី',
    
    footerInfo: 'ពេលវេលា: ប្រហែល 5-10 នាទី'
  },

  // ===========================
  // ラオス語 (新規)
  // ===========================
  lo: {
    title: 'ຕອບດ້ວຍຄວາມໝັ້ນໃຈ | ການສຳຫຼວດບ່ອນເຮັດວຽກ',
    languageLabel: 'ເລືອກພາສາ',
    anonymousMessage: 'ຊື່ຂອງທ່ານຈະບໍ່ຖືກບັນທຶກ',
    anonymousSubMessage: 'ກະລຸນາຕອບຢ່າງຈິງໃຈ',
    employeeCodeLabel: 'ລະຫັດພະນັກງານ',
    employeeCodePlaceholder: 'ເລືອກເລກ 1 ຫາ 20',
    nationalityLabel: 'ສັນຊາດ',
    nationalityPlaceholder: 'ກະລຸນາເລືອກສັນຊາດ',
    startButton: 'ເລີ່ມການສຳຫຼວດ',
    submitButton: 'ເບິ່ງຜົນລັບ',
    
    nationalities: {
      vietnam: 'ຫວຽດນາມ',
      cambodia: 'ກຳປູເຈຍ',
      india: 'ອິນເດຍ',
      philippines: 'ຟິລິບປິນ',
      laos: 'ລາວ',
      mongolia: 'ມົງໂກເລຍ',
      bangladesh: 'ບັງກະລາເທດ',
      srilanka: 'ສີລັງກາ',
      myanmar: 'ມຽນມາ',
      bhutan: 'ພູຖານ',
      uzbekistan: 'ອຸສເບກິສະຖານ',
      pakistan: 'ປາກິສະຖານ',
      thailand: 'ໄທ',
      indonesia: 'ອິນໂດເນເຊຍ',
      nepal: 'ເນປານ',
      china: 'ຈີນ'
    },
    
    categories: {
      work: '1. ວຽກ ແລະ ສະພາບແວດລ້ອມບ່ອນເຮັດວຽກ',
      salary: '2. ເງີນເດືອນ ແລະ ສວັດດີການ',
      family: '3. ຄອບຄົວ ແລະ ສ່ວນຕົວ',
      relationship: '4. ສາຍພົວພັນລະຫວ່າງບຸກຄົນ',
      communication: '5. ພາສາຍີ່ປຸ່ນ ແລະ ການສື່ສານ',
      culture: '6. ວັດທະນະທຳ ແລະ ຄຸນຄ່າ',
      living: '7. ສະພາບແວດລ້ອມການດຳລົງຊີວິດ',
      career: '8. ອາຊີບ ແລະ ອະນາຄົດ'
    },
    
    questions: {
      q1: 'ເນື້ອຫາວຽກເໝາະສົມກັບທ່ານບໍ?',
      q2: 'ທ່ານຄິດວ່າບ່ອນເຮັດວຽກປອດໄພບໍ?',
      q3: 'ວັນພັກ ແລະ ຊົ່ວໂມງການເຮັດວຽກເໝາະສົມບໍ?',
      q4: 'ບັນຍາກາດບ່ອນເຮັດວຽກງ່າຍຕໍ່ການເຮັດວຽກບໍ?',
      q5: 'ທ່ານພໍໃຈກັບຈຳນວນເງິນເດືອນບໍ?',
      q6: 'ທ່ານໄດ້ຮັບເງິນລ່ວງເວລາ ແລະ ເງິນຊ່ວຍເຫຼືອຢ່າງຖືກຕ້ອງບໍ?',
      q7: 'ລະບົບການປະກັນໄພ ແລະ ການພັກຜ່ອນພຽງພໍບໍ?',
      q8: 'ການເຮັດວຽກຢູ່ບໍລິສັດນີ້ເຮັດໃຫ້ທ່ານໄດ້ເງິນພຽງພໍສຳລັບຊີວິດບໍ?',
      q9: 'ທ່ານມີເວລາພຽງພໍໃນການຕິດຕໍ່ຄອບຄົວບໍ?',
      q10: 'ທ່ານມີຄວາມສາມາດສົ່ງເງິນໃຫ້ຄອບຄົວບໍ?',
      q11: 'ທ່ານມີເວລາສ່ວນຕົວ (ພັກຜ່ອນ ແລະ ສ່ວນຕົວ) ພຽງພໍບໍ?',
      q12: 'ທ່ານຢາກນຳຄອບຄົວມາຍີ່ປຸ່ນໃນອະນາຄົດບໍ?',
      q13: 'ສາຍພົວພັນກັບນັກຝຶກອື່ນໆດີບໍ?',
      q14: 'ຫົວໜ້າ ແລະ ເພື່ອນຮ່ວມງານຊາວຍີ່ປຸ່ນຟັງທ່ານບໍ?',
      q15: 'ເມື່ອມີບັນຫາ, ນັກຝຶກອື່ນໆຊ່ວຍທ່ານບໍ?',
      q16: 'ມີການກົດຂີ່ ຫຼື ການຈຳແນກຢູ່ບ່ອນເຮັດວຽກບໍ?',
      q17: 'ທ່ານມີບັນຫາໃນການສົນທະນາເປັນພາສາຍີ່ປຸ່ນບໍ?',
      q18: 'ຄຳອະທິບາຍ ແລະ ຄຳແນະນຳວຽກເຂົ້າໃຈງ່າຍບໍ?',
      q19: 'ງ່າຍໃນການຖາມເມື່ອບໍ່ເຂົ້າໃຈບໍ?',
      q20: 'ບໍລິສັດຊ່ວຍທ່ານຮຽນພາສາຍີ່ປຸ່ນບໍ?',
      q21: 'ມີຄົນທີ່ສາມາດປຶກສາເປັນພາສາແມ່ (ນາຍພາສາ, ຮຸ່ນພີ່) ບໍ?',
      q22: 'ທ່ານຄຸ້ນເຄີຍກັບວັດທະນະທຳ ແລະ ປະເພນີຂອງຍີ່ປຸ່ນບໍ?',
      q23: 'ທ່ານມີບັນຫາຍ້ອນຄວາມແຕກຕ່າງທາງວັດທະນະທຳໃນວຽກບໍ?',
      q24: 'ບ່ອນພັກອາໄສ (ຫໍພັກ, ອາພາດເມັນ) ສະດວກສະບາຍບໍ?',
      q25: 'ຄ່າໃຊ້ຈ່າຍໃນການດຳລົງຊີວິດເໝາະສົມກັບເງິນເດືອນບໍ?',
      q26: 'ທ່ານມີບັນຫາໃນການດຳລົງຊີວິດຢູ່ຍີ່ປຸ່ນບໍ?',
      q27: 'ບໍລິສັດສະໜັບສະໜູນການດຳລົງຊີວິດຂອງທ່ານບໍ?',
      q28: 'ທ່ານພໍໃຈກັບສະພາບແວດລ້ອມການດຳລົງຊີວິດ (ຂະໜາດຫ້ອງ, ສິ່ງອຳນວຍຄວາມສະດວກ) ຢູ່ຫໍພັກ ຫຼື ເຮືອນບໍ?',
      q29: 'ການດຳລົງຊີວິດຢູ່ຍີ່ປຸ່ນປອດໄພ ແລະ ສະດວກສະບາຍບໍ?',
      q30: 'ທ່ານກຳລັງຮຽນຮູ້ເຕັກນິກ ແລະ ຄວາມຮູ້ຈາກວຽກປັດຈຸບັນບໍ?',
      q31: 'ທ່ານຮູ້ສຶກວ່າຄວາມພະຍາຍາມຂອງທ່ານເຮັດໃຫ້ການປະເມີນ ແລະ ການປະຕິບັດດີຂຶ້ນບໍ?',
      q32: 'ທ່ານຢາກເຮັດວຽກຢູ່ບໍລິສັດນີ້ດົນບໍ?',
      q33: 'ບໍລິສັດ ຫຼື ສະຫະພັນຊ່ວຍໃນການຕໍ່ອາຍຸ ແລະ ຂັ້ນຕອນວີຊ່າ (ສະຖານະການອາໄສ) ບໍ?',
      q34: 'ທ່ານກຳລັງຮຽນຮູ້ເຕັກນິກທີ່ມີປະໂຫຍດເມື່ອກັບປະເທດຈາກການເຮັດວຽກຢູ່ບໍລິສັດນີ້ບໍ?',
      q35: 'ທ່ານຈະແນະນຳໝູ່ເພື່ອນໃນປະເທດໃຫ້ເຮັດວຽກຢູ່ບໍລິສັດນີ້ບໍ?'
    },
    
    satisfaction: {
      option1: 'ພໍໃຈຫຼາຍ',
      option2: 'ພໍໃຈໜ້ອຍ',
      option3: 'ບໍ່ແນ່ໃຈ',
      option4: 'ບໍ່ຄ່ອຍພໍໃຈ',
      option5: 'ບໍ່ພໍໃຈ',
      option6: 'ບໍ່ພໍໃຈເລີຍ'
    },
    
    desire: {
      option1: 'ເຫັນດີຫຼາຍ',
      option2: 'ເຫັນດີໜ້ອຍ',
      option3: 'ບໍ່ແນ່ໃຈ',
      option4: 'ບໍ່ຄ່ອຍເຫັນດີ',
      option5: 'ບໍ່ເຫັນດີ',
      option6: 'ບໍ່ເຫັນດີເລີຍ'
    },
    
    understanding: {
      option1: 'ເຂົ້າໃຈງ່າຍຫຼາຍ',
      option2: 'ເຂົ້າໃຈງ່າຍໜ້ອຍ',
      option3: 'ບໍ່ແນ່ໃຈ',
      option4: 'ບໍ່ຄ່ອຍເຂົ້າໃຈ',
      option5: 'ຍາກເຂົ້າໃຈ',
      option6: 'ບໍ່ເຂົ້າໃຈເລີຍ'
    },
    
    familiarity: {
      option1: 'ຄຸ້ນເຄີຍຫຼາຍ',
      option2: 'ຄຸ້ນເຄີຍໜ້ອຍ',
      option3: 'ບໍ່ແນ່ໃຈ',
      option4: 'ບໍ່ຄ່ອຍຄຸ້ນເຄີຍ',
      option5: 'ບໍ່ຄຸ້ນເຄີຍ',
      option6: 'ບໍ່ຄຸ້ນເຄີຍເລີຍ'
    },
    
    availability: {
      option1: 'ມີຫຼາຍ',
      option2: 'ມີໜ້ອຍ',
      option3: 'ບໍ່ແນ່ໃຈ',
      option4: 'ມີນ້ອຍ',
      option5: 'ເກືອບບໍ່ມີ',
      option6: 'ບໍ່ມີເລີຍ'
    },
    
    negative: {
      option1: 'ບໍ່ມີເລີຍ',
      option2: 'ເກືອບບໍ່ມີ',
      option3: 'ບໍ່ແນ່ໃຈ',
      option4: 'ບາງຄັ້ງ',
      option5: 'ເລື້ອຍໆ',
      option6: 'ສະເໝີ'
    },
    
    errorEmployeeCode: 'ກະລຸນາເລືອກລະຫັດພະນັກງານ',
    errorNationality: 'ກະລຸນາເລືອກສັນຊາດ',
    errorAllQuestions: 'ກະລຸນາຕອບທຸກຄຳຖາມ',
    errorDuplicate: 'ລະຫັດພະນັກງານ {code} ໄດ້ຕອບໃນເດືອນນີ້ແລ້ວ ({date})',
    
    completionTitle: 'ຂອບໃຈສຳລັບການຮ່ວມມື!',
    completionMessage: 'ຄຳຕອບຂອງທ່ານໄດ້ຖືກບັນທຶກຢ່າງປອດໄພແລ້ວ',
    completionAutoClose: 'ໜ້ານີ້ຈະປິດອັດຕະໂນມັດ',
    completionRemaining: 'ເຫຼືອ',
    completionSeconds: 'ວິນາທີ',
    
    footerInfo: 'ເວລາ: ປະມານ 5-10 ນາທີ'
  }
};
  // ===========================
  // モンゴル語 (新規)
  // ===========================
  ,
  mn: {
    title: 'Итгэлтэйгээр хариулна уу | Ажлын байрны судалгаа',
    languageLabel: 'Хэл сонгох',
    anonymousMessage: 'Таны нэр бүртгэгдэхгүй',
    anonymousSubMessage: 'Үнэнч хариулна уу',
    employeeCodeLabel: 'Ажилтны код',
    employeeCodePlaceholder: '1-ээс 20 хүртэлх дугаар сонгоно уу',
    nationalityLabel: 'Харьяат',
    nationalityPlaceholder: 'Харьяат сонгоно уу',
    startButton: 'Судалгаа эхлүүлэх',
    submitButton: 'Үр дүн харах',
    
    nationalities: {
      vietnam: 'Вьетнам',
      cambodia: 'Камбож',
      india: 'Энэтхэг',
      philippines: 'Филиппин',
      laos: 'Лаос',
      mongolia: 'Монгол',
      bangladesh: 'Бангладеш',
      srilanka: 'Шри Ланка',
      myanmar: 'Мьянмар',
      bhutan: 'Бутан',
      uzbekistan: 'Узбекистан',
      pakistan: 'Пакистан',
      thailand: 'Тайланд',
      indonesia: 'Индонез',
      nepal: 'Балба',
      china: 'Хятад'
    },
    
    categories: {
      work: '1. Ажил ба ажлын орчин',
      salary: '2. Цалин ба тэтгэмж',
      family: '3. Гэр бүл ба хувийн асуудал',
      relationship: '4. Хүний харилцаа',
      communication: '5. Япон хэл ба харилцаа холбоо',
      culture: '6. Соёл ба үнэт зүйлс',
      living: '7. Амьдрах орчин',
      career: '8. Карьер ба ирээдүй'
    },
    
    questions: {
      q1: 'Ажлын агуулга танд тохирч байна уу?',
      q2: 'Ажлын газар аюулгүй гэж бодож байна уу?',
      q3: 'Амралтын өдөр ба ажлын цаг тохиромжтой юу?',
      q4: 'Ажлын орчин ажиллахад хялбар юу?',
      q5: 'Цалингийн хэмжээнд сэтгэл хангалуун байна уу?',
      q6: 'Илүү цагийн мөнгө болон тэтгэмжийг зөв авч байна уу?',
      q7: 'Даатгал, амралтын систем хангалттай юу?',
      q8: 'Энэ компанид ажиллаж амьдрахад хангалттай мөнгө авч байна уу?',
      q9: 'Гэр бүлтэйгээ холбогдох цаг хангалттай юу?',
      q10: 'Гэр бүлдээ мөнгө илгээх боломжтой юу?',
      q11: 'Хувийн цаг (амралт, хувийн) хангалттай юу?',
      q12: 'Ирээдүйд гэр бүлээ Японд дуудмаар байна уу?',
      q13: 'Бусад сургагч нартай харилцаа сайн байна уу?',
      q14: 'Япон удирдлага, хамтран ажиллагсад таны яриаг сонсдог уу?',
      q15: 'Хүндрэлтэй үед бусад сургагч нар тусалдаг уу?',
      q16: 'Ажлын байранд дарамт, ялгаварлал байдаг уу?',
      q17: 'Япон хэлээр ярихад бэрхшээлтэй байна уу?',
      q18: 'Ажлын тайлбар, зааврыг ойлгоход хялбар юу?',
      q19: 'Ойлгоогүй зүйлээ асуухад хялбар юу?',
      q20: 'Компани япон хэл сурахад тусалдаг уу?',
      q21: 'Эх хэлээрээ зөвлөгөө авах хүн (орчуулагч, ахлагч) байдаг уу?',
      q22: 'Японы соёл, зан заншилд дассан уу?',
      q23: 'Ажил дээр соёлын ялгаанаас хүндрэлтэй байдаг уу?',
      q24: 'Амьдрах газар (дотуур байр, орон сууц) тав тухтай юу?',
      q25: 'Амьдралын зардал цалинтай харьцуулахад тохиромжтой юу?',
      q26: 'Японд амьдрахад хүндрэлтэй байдаг уу?',
      q27: 'Компани амьдралыг дэмждэг үү?',
      q28: 'Дотуур байр эсвэл гэрийн амьдрах орчин (өрөөний хэмжээ, тоног төхөөрөмж)-д сэтгэл хангалуун байна уу?',
      q29: 'Японд амьдрал аюулгүй, тав тухтай юу?',
      q30: 'Одоогийн ажлаас техник, мэдлэг суралцаж байна уу?',
      q31: 'Хичээл зүтгэл тань үнэлгээ, хандлагыг сайжруулж байгааг мэдэрч байна уу?',
      q32: 'Энэ компанид удаан ажиллахыг хүсч байна уу?',
      q33: 'Компани эсвэл холбоо виз (оршин суух эрх) сунгах, журамд тусалдаг уу?',
      q34: 'Энэ компанид ажиллаж эх орондоо буцахад ашигтай техник суралцаж байна уу?',
      q35: 'Эх орныхоо найзуудад "энэ компанид ажиллах нь дээр" гэж санал болгох уу?'
    },
    
    satisfaction: {
      option1: 'Маш сэтгэл хангалуун',
      option2: 'Сэтгэл хангалуун',
      option3: 'Тодорхойгүй',
      option4: 'Тийм ч сэтгэл хангалуун биш',
      option5: 'Сэтгэл хангалуун биш',
      option6: 'Огт сэтгэл хангалуун биш'
    },
    
    desire: {
      option1: 'Маш зөвшөөрч байна',
      option2: 'Зөвшөөрч байна',
      option3: 'Тодорхойгүй',
      option4: 'Тийм ч зөвшөөрөхгүй байна',
      option5: 'Зөвшөөрөхгүй байна',
      option6: 'Огт зөвшөөрөхгүй байна'
    },
    
    understanding: {
      option1: 'Маш ойлгомжтой',
      option2: 'Ойлгомжтой',
      option3: 'Тодорхойгүй',
      option4: 'Тийм ч ойлгомжгүй',
      option5: 'Ойлгомжгүй',
      option6: 'Огт ойлгомжгүй'
    },
    
    familiarity: {
      option1: 'Маш дассан',
      option2: 'Дассан',
      option3: 'Тодорхойгүй',
      option4: 'Тийм ч дасаагүй',
      option5: 'Дасаагүй',
      option6: 'Огт дасаагүй'
    },
    
    availability: {
      option1: 'Маш их байна',
      option2: 'Байна',
      option3: 'Тодорхойгүй',
      option4: 'Тийм ч их биш',
      option5: 'Бараг байхгүй',
      option6: 'Огт байхгүй'
    },
    
    negative: {
      option1: 'Огт байхгүй',
      option2: 'Бараг байхгүй',
      option3: 'Тодорхойгүй',
      option4: 'Заримдаа',
      option5: 'Байнга',
      option6: 'Үргэлж'
    },
    
    errorEmployeeCode: 'Ажилтны код сонгоно уу',
    errorNationality: 'Харьяат сонгоно уу',
    errorAllQuestions: 'Бүх асуултад хариулна уу',
    errorDuplicate: 'Ажилтны код {code} энэ сард аль хэдийн хариулсан ({date})',
    
    completionTitle: 'Хамтран ажилласанд баярлалаа!',
    completionMessage: 'Таны хариулт аюулгүй хадгалагдлаа',
    completionAutoClose: 'Энэ хуудас автоматаар хаагдана',
    completionRemaining: 'Үлдсэн',
    completionSeconds: 'секунд',
    
    footerInfo: 'Хугацаа: Ойролцоогоор 5-10 минут'
  },

  // ===========================
  // ベンガル語 (バングラデシュ) (新規)
  // ===========================
  bn: {
    title: 'নিশ্চিন্তে উত্তর দিন | কর্মস্থল জরিপ',
    languageLabel: 'ভাষা নির্বাচন করুন',
    anonymousMessage: 'আপনার নাম রেকর্ড করা হবে না',
    anonymousSubMessage: 'অনুগ্রহ করে সৎভাবে উত্তর দিন',
    employeeCodeLabel: 'কর্মচারী কোড',
    employeeCodePlaceholder: '১ থেকে ২০ পর্যন্ত নম্বর নির্বাচন করুন',
    nationalityLabel: 'জাতীয়তা',
    nationalityPlaceholder: 'অনুগ্রহ করে জাতীয়তা নির্বাচন করুন',
    startButton: 'জরিপ শুরু করুন',
    submitButton: 'ফলাফল দেখুন',
    
    nationalities: {
      vietnam: 'ভিয়েতনাম',
      cambodia: 'কম্বোডিয়া',
      india: 'ভারত',
      philippines: 'ফিলিপাইন',
      laos: 'লাওস',
      mongolia: 'মঙ্গোলিয়া',
      bangladesh: 'বাংলাদেশ',
      srilanka: 'শ্রীলংকা',
      myanmar: 'মায়ানমার',
      bhutan: 'ভুটান',
      uzbekistan: 'উজবেকিস্তান',
      pakistan: 'পাকিস্তান',
      thailand: 'থাইল্যান্ড',
      indonesia: 'ইন্দোনেশিয়া',
      nepal: 'নেপাল',
      china: 'চীন'
    },
    
    categories: {
      work: '১. কাজ ও কর্মপরিবেশ',
      salary: '২. বেতন ও সুবিধা',
      family: '৩. পরিবার ও ব্যক্তিগত',
      relationship: '৪. মানবিক সম্পর্ক',
      communication: '৫. জাপানি ভাষা ও যোগাযোগ',
      culture: '৬. সংস্কৃতি ও মূল্যবোধ',
      living: '৭. জীবনযাপন পরিবেশ',
      career: '৮. ক্যারিয়ার ও ভবিষ্যৎ'
    },
    
    questions: {
      q1: 'কাজের বিষয়বস্তু আপনার জন্য উপযুক্ত?',
      q2: 'কর্মস্থল কি নিরাপদ মনে হয়?',
      q3: 'ছুটির দিন এবং কাজের সময় কি উপযুক্ত?',
      q4: 'কর্মস্থলের পরিবেশ কি কাজ করতে সহজ?',
      q5: 'বেতনের পরিমাণে কি সন্তুষ্ট?',
      q6: 'ওভারটাইম এবং ভাতা কি সঠিকভাবে পাচ্ছেন?',
      q7: 'বীমা এবং ছুটির মতো ব্যবস্থা কি পর্যাপ্ত?',
      q8: 'এই কোম্পানিতে কাজ করে জীবনযাপনের জন্য পর্যাপ্ত অর্থ পাচ্ছেন?',
      q9: 'পরিবারের সাথে যোগাযোগের জন্য পর্যাপ্ত সময় আছে?',
      q10: 'পরিবারে টাকা পাঠানোর সামর্থ্য আছে?',
      q11: 'নিজের সময় (ছুটি এবং ব্যক্তিগত) কি পর্যাপ্ত?',
      q12: 'ভবিষ্যতে পরিবারকে জাপানে আনতে চান?',
      q13: 'অন্যান্য প্রশিক্ষণার্থীদের সাথে সম্পর্ক কি ভালো?',
      q14: 'জাপানি বস এবং সহকর্মীরা কি আপনার কথা শোনেন?',
      q15: 'সমস্যার সময় অন্য প্রশিক্ষণার্থীরা কি সাহায্য করেন?',
      q16: 'কর্মস্থলে কি হয়রানি বা বৈষম্য আছে?',
      q17: 'জাপানি ভাষায় কথা বলতে কি সমস্যা হয়?',
      q18: 'কাজের ব্যাখ্যা এবং নির্দেশনা কি বুঝতে সহজ?',
      q19: 'না বুঝলে প্রশ্ন করা কি সহজ?',
      q20: 'কোম্পানি কি জাপানি ভাষা শিখতে সাহায্য করে?',
      q21: 'মাতৃভাষায় পরামর্শ নেওয়ার মতো কেউ (দোভাষী, সিনিয়র) আছে?',
      q22: 'জাপানের সংস্কৃতি এবং রীতিনীতিতে কি অভ্যস্ত?',
      q23: 'কাজে সাংস্কৃতিক পার্থক্যের কারণে কি সমস্যা হয়?',
      q24: 'বসবাসের জায়গা (ডরমিটরি, অ্যাপার্টমেন্ট) কি আরামদায়ক?',
      q25: 'জীবনযাপন খরচ কি বেতনের তুলনায় উপযুক্ত?',
      q26: 'জাপানে জীবনযাপনে কি সমস্যা হয়?',
      q27: 'কোম্পানি কি জীবনযাপনে সহায়তা করে?',
      q28: 'ডরমিটরি বা বাড়ির জীবনযাপন পরিবেশ (রুমের আকার, সুবিধা) নিয়ে কি সন্তুষ্ট?',
      q29: 'জাপানে জীবনযাপন কি নিরাপদ এবং আরামদায়ক?',
      q30: 'বর্তমান কাজ থেকে কি প্রযুক্তি এবং জ্ঞান শিখছেন?',
      q31: 'আপনার প্রচেষ্টা কি মূল্যায়ন এবং আচরণ উন্নত করছে বলে মনে হয়?',
      q32: 'এই কোম্পানিতে দীর্ঘদিন কাজ করতে চান?',
      q33: 'কোম্পানি বা ইউনিয়ন কি ভিসা (বসবাসের স্ট্যাটাস) নবায়ন এবং প্রক্রিয়ায় সাহায্য করে?',
      q34: 'এই কোম্পানিতে কাজ করে দেশে ফিরে কাজে লাগবে এমন প্রযুক্তি কি শিখছেন?',
      q35: 'দেশের বন্ধুদের কি "এই কোম্পানিতে কাজ করা ভালো" বলবেন?'
    },
    
    satisfaction: {
      option1: 'খুব সন্তুষ্ট',
      option2: 'কিছুটা সন্তুষ্ট',
      option3: 'অনিশ্চিত',
      option4: 'কিছুটা অসন্তুষ্ট',
      option5: 'অসন্তুষ্ট',
      option6: 'সম্পূর্ণ অসন্তুষ্ট'
    },
    
    desire: {
      option1: 'সম্পূর্ণ সহমত',
      option2: 'কিছুটা সহমত',
      option3: 'অনিশ্চিত',
      option4: 'কিছুটা অসহমত',
      option5: 'অসহমত',
      option6: 'সম্পূর্ণ অসহমত'
    },
    
    understanding: {
      option1: 'খুব সহজ',
      option2: 'কিছুটা সহজ',
      option3: 'অনিশ্চিত',
      option4: 'কিছুটা কঠিন',
      option5: 'কঠিন',
      option6: 'সম্পূর্ণ কঠিন'
    },
    
    familiarity: {
      option1: 'খুব অভ্যস্ত',
      option2: 'কিছুটা অভ্যস্ত',
      option3: 'অনিশ্চিত',
      option4: 'কিছুটা অভ্যস্ত নয়',
      option5: 'অভ্যস্ত নয়',
      option6: 'সম্পূর্ণ অভ্যস্ত নয়'
    },
    
    availability: {
      option1: 'অনেক আছে',
      option2: 'কিছু আছে',
      option3: 'অনিশ্চিত',
      option4: 'কম আছে',
      option5: 'প্রায় নেই',
      option6: 'নেই'
    },
    
    negative: {
      option1: 'নেই',
      option2: 'প্রায় নেই',
      option3: 'অনিশ্চিত',
      option4: 'মাঝে মাঝে',
      option5: 'প্রায়ই',
      option6: 'সবসময়'
    },
    
    errorEmployeeCode: 'অনুগ্রহ করে কর্মচারী কোড নির্বাচন করুন',
    errorNationality: 'অনুগ্রহ করে জাতীয়তা নির্বাচন করুন',
    errorAllQuestions: 'অনুগ্রহ করে সব প্রশ্নের উত্তর দিন',
    errorDuplicate: 'কর্মচারী কোড {code} এই মাসে ইতিমধ্যে উত্তর দিয়েছে ({date})',
    
    completionTitle: 'সহযোগিতার জন্য ধন্যবাদ!',
    completionMessage: 'আপনার উত্তর নিরাপদভাবে সংরক্ষণ করা হয়েছে',
    completionAutoClose: 'এই পৃষ্ঠা স্বয়ংক্রিয়ভাবে বন্ধ হবে',
    completionRemaining: 'বাকি',
    completionSeconds: 'সেকেন্ড',
    
    footerInfo: 'সময়: প্রায় ৫-১০ মিনিট'
  },

  // ===========================
  // シンハラ語 (スリランカ) (新規)
  // ===========================
  si: {
    title: 'විශ්වාසයෙන් පිළිතුරු දෙන්න | කාර්යස්ථාන සමීක්ෂණය',
    languageLabel: 'භාෂාව තෝරන්න',
    anonymousMessage: 'ඔබේ නම වාර්තා නොකෙරේ',
    anonymousSubMessage: 'කරුණාකර අවංකව පිළිතුරු දෙන්න',
    employeeCodeLabel: 'සේවක කේතය',
    employeeCodePlaceholder: '1 සිට 20 දක්වා අංකයක් තෝරන්න',
    nationalityLabel: 'ජාතිකත්වය',
    nationalityPlaceholder: 'කරුණාකර ජාතිකත්වය තෝරන්න',
    startButton: 'සමීක්ෂණය ආරම්භ කරන්න',
    submitButton: 'ප්‍රතිඵල බලන්න',
    
    nationalities: {
      vietnam: 'වියට්නාමය',
      cambodia: 'කාම්බෝජය',
      india: 'ඉන්දියාව',
      philippines: 'පිලිපීනය',
      laos: 'ලාඕසය',
      mongolia: 'මොංගෝලියාව',
      bangladesh: 'බංග්ලාදේශය',
      srilanka: 'ශ්‍රී ලංකාව',
      myanmar: 'මියන්මාරය',
      bhutan: 'භූතානය',
      uzbekistan: 'උස්බෙකිස්තානය',
      pakistan: 'පාකිස්තානය',
      thailand: 'තායිලන්තය',
      indonesia: 'ඉන්දුනීසියාව',
      nepal: 'නේපාලය',
      china: 'චීනය'
    },
    
    categories: {
      work: '1. රැකියාව සහ කාර්යාල පරිසරය',
      salary: '2. වැටුප් සහ ප්‍රතිලාභ',
      family: '3. පවුල සහ පුද්ගලික',
      relationship: '4. මානව සබඳතා',
      communication: '5. ජපන් භාෂාව සහ සන්නිවේදනය',
      culture: '6. සංස්කෘතිය සහ වටිනාකම්',
      living: '7. ජීවන පරිසරය',
      career: '8. වෘත්තීය සහ අනාගතය'
    },
    
    questions: {
      q1: 'රැකියාවේ අන්තර්ගතය ඔබට සුදුසුද?',
      q2: 'රැකියා ස්ථානය ආරක්ෂිත යැයි සිතනවාද?',
      q3: 'නිවාඩු දින සහ රැකියා කාලය සුදුසුද?',
      q4: 'රැකියා ස්ථාන පරිසරය වැඩ කිරීමට පහසුද?',
      q5: 'වැටුප් ප්‍රමාණය ගැන සෑහීමකට පත්ද?',
      q6: 'අතිකාල වැටුප් සහ දීමනා නිසි ලෙස ලැබෙනවාද?',
      q7: 'රක්ෂණ සහ නිවාඩු වැනි ක්‍රම ප්‍රමාණවත්ද?',
      q8: 'මෙම සමාගමේ වැඩ කිරීමෙන් ජීවත්වීමට අවශ්‍ය මුදල් ලැබෙනවාද?',
      q9: 'පවුල සමඟ සන්නිවේදනය කිරීමට ප්‍රමාණවත් කාලයක් තිබේද?',
      q10: 'පවුලට මුදල් යැවීමේ හැකියාවක් තිබේද?',
      q11: 'ඔබේ කාලය (නිවාඩු සහ පුද්ගලික) ප්‍රමාණවත්ද?',
      q12: 'අනාගතයේදී පවුල ජපානයට ගෙන්වා ගැනීමට අවශ්‍යද?',
      q13: 'අනෙකුත් පුහුණු කරුවන් සමඟ සබඳතා හොඳද?',
      q14: 'ජපන් ලොක්කු සහ සගයන් ඔබේ කථාව අසනවාද?',
      q15: 'ගැටළු වලදී අනෙකුත් පුහුණු කරුවන් උදව් කරනවාද?',
      q16: 'රැකියා ස්ථානයේ හිරිහැර හෝ වෙනස්කම් සිදුවනවාද?',
      q17: 'ජපන් භාෂාවෙන් කථා කිරීමේදී ගැටළු තිබේද?',
      q18: 'රැකියා පැහැදිලි කිරීම් සහ උපදෙස් තේරුම් ගැනීමට පහසුද?',
      q19: 'නොතේරෙන දෙයක් විමසීමට පහසුද?',
      q20: 'සමාගම ජපන් භාෂාව ඉගෙනීමට උදව් කරනවාද?',
      q21: 'මව් භාෂාවෙන් උපදෙස් ලබා ගත හැකි කෙනෙක් (පරිවර්තකයා, ජ්‍යෙෂ්ඨයා) සිටීද?',
      q22: 'ජපන් සංස්කෘතිය සහ සම්ප්‍රදායන් හුරුපුරුදුද?',
      q23: 'රැකියාවේදී සංස්කෘතික වෙනස්කම් නිසා ගැටළු තිබේද?',
      q24: 'ජීවත් වන ස්ථානය (නේවාසිකාගාරය, මහල් නිවාසය) සුවපහසුද?',
      q25: 'ජීවන වියදම වැටුප් සමඟ සැසඳීමේදී සුදුසුද?',
      q26: 'ජපානයේ ජීවත්වීමේදී ගැටළු තිබේද?',
      q27: 'සමාගම ජීවන සහාය සපයයිද?',
      q28: 'නේවාසිකාගාරයේ හෝ නිවසේ ජීවන පරිසරය (කාමර ප්‍රමාණය, පහසුකම්) ගැන සෑහීමකට පත්ද?',
      q29: 'ජපානයේ ජීවිතය ආරක්ෂිත සහ සුවපහසුද?',
      q30: 'වර්තමාන රැකියාවෙන් තාක්ෂණය සහ දැනුම ඉගෙන ගන්නවාද?',
      q31: 'ඔබේ උත්සාහය තක්සේරුව සහ ප්‍රතිකාර වැඩි දියුණු කරන බව දැනෙනවාද?',
      q32: 'මෙම සමාගමේ දිගු කාලයක් වැඩ කිරීමට අවශ්‍යද?',
      q33: 'සමාගම හෝ වෘත්තීය සමිතිය වීසා (නේවාසික තත්ත්වය) අළුත් කිරීම සහ ක්‍රියාවලිය සඳහා උදව් කරනවාද?',
      q34: 'මෙම සමාගමේ වැඩ කිරීමෙන් මව් රටට ආපසු ගිය පසු ප්‍රයෝජනවත් තාක්ෂණයක් ඉගෙන ගන්නවාද?',
      q35: 'මව් රටේ මිතුරන්ට "මෙම සමාගමේ වැඩ කිරීම හොඳයි" යැයි කියනවාද?'
    },
    
    satisfaction: {
      option1: 'ඉතා සෑහීමකට පත්',
      option2: 'තරමක් සෑහීමකට පත්',
      option3: 'අවිනිශ්චිත',
      option4: 'තරමක් අසතුටුයි',
      option5: 'අසතුටුයි',
      option6: 'සම්පූර්ණයෙන්ම අසතුටුයි'
    },
    
    desire: {
      option1: 'සම්පූර්ණයෙන්ම එකඟයි',
      option2: 'තරමක් එකඟයි',
      option3: 'අවිනිශ්චිත',
      option4: 'තරමක් එකඟ නැත',
      option5: 'එකඟ නැත',
      option6: 'සම්පූර්ණයෙන්ම එකඟ නැත'
    },
    
    understanding: {
      option1: 'ඉතා පහසු',
      option2: 'තරමක් පහසු',
      option3: 'අවිනිශ්චිත',
      option4: 'තරමක් අපහසු',
      option5: 'අපහසු',
      option6: 'සම්පූර්ණයෙන්ම අපහසු'
    },
    
    familiarity: {
      option1: 'ඉතා හුරුපුරුදු',
      option2: 'තරමක් හුරුපුරුදු',
      option3: 'අවිනිශ්චිත',
      option4: 'තරමක් හුරුපුරුදු නැත',
      option5: 'හුරුපුරුදු නැත',
      option6: 'සම්පූර්ණයෙන්ම හුරුපුරුදු නැත'
    },
    
    availability: {
      option1: 'බොහෝ තිබේ',
      option2: 'තරමක් තිබේ',
      option3: 'අවිනිශ්චිත',
      option4: 'ස්වල්පයක් තිබේ',
      option5: 'පාහේ නැත',
      option6: 'නැත'
    },
    
    negative: {
      option1: 'නැත',
      option2: 'පාහේ නැත',
      option3: 'අවිනිශ්චිත',
      option4: 'සමහර විට',
      option5: 'නිතර',
      option6: 'නිතරම'
    },
    
    errorEmployeeCode: 'කරුණාකර සේවක කේතය තෝරන්න',
    errorNationality: 'කරුණාකර ජාතිකත්වය තෝරන්න',
    errorAllQuestions: 'කරුණාකර සියලුම ප්‍රශ්නවලට පිළිතුරු දෙන්න',
    errorDuplicate: 'සේවක කේතය {code} මෙම මාසයේ දැනටමත් පිළිතුරු දී ඇත ({date})',
    
    completionTitle: 'සහයෝගයට ස්තූතියි!',
    completionMessage: 'ඔබේ පිළිතුර ආරක්ෂිතව සුරකින ලදී',
    completionAutoClose: 'මෙම පිටුව ස්වයංක්‍රීයව වසා දමනු ඇත',
    completionRemaining: 'ඉතිරි',
    completionSeconds: 'තත්පර',
    
    footerInfo: 'කාලය: ආසන්න වශයෙන් 5-10 මිනිත්තු'
  },

  // ===========================
  // ゾンカ語 (ブータン) (新規)
  // ===========================
  dz: {
    title: 'ཡིད་ཆེས་དང་བཅས་ལན་འདེབས་གནང་ | ལཱ་གི་ས་གནས་ཞིབ་དཔྱད།',
    languageLabel: 'སྐད་ཡིག་འདེམས་པ།',
    anonymousMessage: 'ཁྱོད་ཀྱི་མིང་དེ་ཐོ་བཀོད་མི་འབད།',
    anonymousSubMessage: 'ཁ་གསལ་སྦེ་ལན་སྤྲོད།',
    employeeCodeLabel: 'ལཱ་གཡོག་པའི་ཨང་རྟགས།',
    employeeCodePlaceholder: '༡ ལས་ ༢༠ བར་གྱི་ཨང་གྲངས་འདེམས་པ།',
    nationalityLabel: 'མི་རིགས།',
    nationalityPlaceholder: 'མི་རིགས་འདེམས་པ།',
    startButton: 'ཞིབ་དཔྱད་འགོ་བཙུགས།',
    submitButton: 'འབྲས་བུ་ལྟ།',
    
    nationalities: {
      vietnam: 'བེཊ་ནཱམ།',
      cambodia: 'ཀམ་བོ་ཌི་ཡ།',
      india: 'རྒྱ་གར།',
      philippines: 'ཕི་ལི་པིནས།',
      laos: 'ལཱ་འོསི།',
      mongolia: 'སོག་པོ།',
      bangladesh: 'བངྒ་ལ་དེཤ།',
      srilanka: 'ཤྲཱི་ལང་ཀ།',
      myanmar: 'མི་ཡཱན་མར།',
      bhutan: 'འབྲུག',
      uzbekistan: 'ཨུཛ་བེ་ཀིསི་ཏཱན།',
      pakistan: 'པ་ཀིསི་ཏཱན།',
      thailand: 'ཐཱའི་ལེནཌ།',
      indonesia: 'ཨིན་ཌོ་ནེ་ཤི་ཡ།',
      nepal: 'བལ་ཡུལ།',
      china: 'རྒྱ་ནག'
    },
    
    categories: {
      work: '༡. ལཱ་དང་ལཱ་གི་ས་གནས་ཁོར་ཡུག',
      salary: '༢. དངུལ་ཕོགས་དང་སྒྲུབ་ཆོག',
      family: '༣. ནང་མི་དང་རང་དོན།',
      relationship: '༤. མི་འབྲེལ།',
      communication: '༥. ཇ་པཱན་སྐད་དང་འབྲེལ་བ།',
      culture: '༦. རིག་གཞུང་དང་གནས་གོང་།',
      living: '༧. གནས་སྡོད་ཁོར་ཡུག',
      career: '༨. འཚོ་བ་དང་མ་འོངས་པ།'
    },
    
    questions: {
      q1: 'ལཱ་གི་ནང་དོན་དེ་ཁྱོད་ལུ་འོས་ཡོདཔ་སྨོ?',
      q2: 'ལཱ་གི་ས་གནས་དེ་ཉེན་སྲུང་ཡོདཔ་བརྩིཝ་སྨོ?',
      q3: 'གཟབ་གཟབ་གི་ཉིན་དང་ལཱ་གི་ཆུ་ཚོད་འོས་ཡོདཔ་སྨོ?',
      q4: 'ལཱ་གི་ས་གནས་ཀྱི་ཁོར་ཡུག་དེ་ལཱ་འབད་ནི་ལུ་སྲལ་ཡོདཔ་སྨོ?',
      q5: 'དངུལ་ཕོགས་ཀྱི་ཆེ་ཆུང་ལུ་དགའ་སྤོབ་སྦེ་ཡོདཔ་སྨོ?',
      q6: 'བསྐལ་ལྷག་དངུལ་དང་གྲོགས་རམ་ངེས་བདེན་སྦེ་འབད་ཡོདཔ་སྨོ?',
      q7: 'ཞིབ་འདོན་དང་གཟབ་གཟབ་བཟུམ་གྱི་ལམ་ལུགས་ཕྱུག་ཡོདཔ་སྨོ?',
      q8: 'ཀུམ་པ་ནི་འདི་ནང་ལཱ་འབད་བའི་ཐོག་ལས་གཞི་རྟེན་ལུ་དགོས་མཁོ་ཡོད་པའི་དངུལ་འབད་ཚུགསཔ་སྨོ?',
      q9: 'ནང་མི་དང་འབྲེལ་བ་འབད་ནི་ལུ་ཆུ་ཚོད་ཕྱུག་ཡོདཔ་སྨོ?',
      q10: 'ནང་མི་ལུ་དངུལ་གཏང་ནིའི་ནུས་པ་ཡོདཔ་སྨོ?',
      q11: 'རང་གི་ཆུ་ཚོད་(གཟབ་གཟབ་དང་རང་དོན)ཕྱུག་ཡོདཔ་སྨོ?',
      q12: 'མ་འོངས་པར་ནང་མི་ཇ་པཱན་ལུ་བོད་དགོཔ་སྨོ?',
      q13: 'གཞན་གྱི་སྦྱོང་བྱེད་པ་ཚུ་དང་འབྲེལ་བ་ལེགས་ཤོམ་ཡོདཔ་སྨོ?',
      q14: 'ཇ་པཱན་གྱི་དཔོན་པོ་དང་ལཱ་གཡོག་ཚུ་གིས་ཁྱོད་ཀྱི་གསུང་དེ་ཉན་ནི་ཨིན་ན?',
      q15: 'དཀའ་ངལ་བྱུང་བའི་སྐབས་ལུ་གཞན་གྱི་སྦྱོང་བྱེད་པ་ཚུ་གིས་གྲོགས་རམ་འབདཝ་ཨིན་ན?',
      q16: 'ལཱ་གི་ས་གནས་ལུ་འཕྲུལ་བཀོལ་ཡང་ན་ཁྱད་པར་ཅན་གྱི་བྱ་སྤྱོད་ཡོདཔ་སྨོ?',
      q17: 'ཇ་པཱན་སྐད་ཐོག་ལས་གླེང་སླང་འབད་ནི་ལུ་དཀའ་ངལ་ཡོདཔ་སྨོ?',
      q18: 'ལཱ་གི་བཤད་པ་དང་བརྡ་སྟོན་དེ་ཧ་གོཝ་སྦེ་ཨིན་ན?',
      q19: 'མ་ཧ་གོ་བའི་དོན་དག་དྲིས་ནི་སྲལ་ཡོདཔ་སྨོ?',
      q20: 'ཀུམ་པ་ནི་འདི་གིས་ཇ་པཱན་སྐད་སྦྱོང་ནི་ལུ་གྲོགས་རམ་འབདཝ་ཨིན་ན?',
      q21: 'ཕ་སྐད་ཐོག་ལས་ལམ་སྟོན་འབད་བའི་མི་(སྐད་སྒྱུར་བ་༼རྒན་ལས)ཡོདཔ་སྨོ?',
      q22: 'ཇ་པཱན་གྱི་རིག་གཞུང་དང་གོམས་གཤིས་ལུ་གོམས་འདྲིས་སྦེ་ཡོདཔ་སྨོ?',
      q23: 'ལཱ་ནང་རིག་གཞུང་གི་ཁྱད་པར་ལས་དཀའ་ངལ་ཡོདཔ་སྨོ?',
      q24: 'གནས་སྡོད་ས་གནས་(གཞིས་ཆགས་༼ཁང་ཕོངས)བདེ་སྐྱིད་ཡོདཔ་སྨོ?',
      q25: 'གཞི་རྟེན་གྱི་གླ་ཆ་དེ་དངུལ་ཕོགས་དང་བསྡུར་བ་ད་འོས་ཡོདཔ་སྨོ?',
      q26: 'ཇ་པཱན་ནང་གཞི་རྟེན་སྦེ་དཀའ་ངལ་ཡོདཔ་སྨོ?',
      q27: 'ཀུམ་པ་ནི་འདི་གིས་གཞི་རྟེན་ལུ་གྲོགས་རམ་འབདཝ་ཨིན་ན?',
      q28: 'གཞིས་ཆགས་ཡང་ན་ཁང་པའི་གནས་སྡོད་ཁོར་ཡུག(ཁང་མིག་གི་ཆེ་ཆུང་༼གྲོགས་རམ)ལུ་དགའ་སྤོབ་སྦེ་ཡོདཔ་སྨོ?',
      q29: 'ཇ་པཱན་ནང་གཞི་རྟེན་དེ་ཉེན་སྲུང་དང་བདེ་སྐྱིད་ཅན་ཨིན་ན?',
      q30: 'ད་ལྟོའི་ལཱ་ལས་འཕྲུལ་རིག་དང་ཤེས་ཡོན་སྦྱོང་དོ་ཡོདཔ་སྨོ?',
      q31: 'ཁྱོད་ཀྱི་དཀའ་ལས་དེ་གིས་ངོས་འཛིན་དང་བྱ་སྤྱོད་ལེགས་བཅོས་འབད་དོ་ཡོདཔ་སྦེ་ཚོར་དོ་ཡོདཔ་སྨོ?',
      q32: 'ཀུམ་པ་ནི་འདི་ནང་ལུ་རིང་མོ་སྦེ་ལཱ་འབད་དགོཔ་སྨོ?',
      q33: 'ཀུམ་པ་ནི་ཡང་ན་མཐུན་ཚོགས་ཀྱིས་བི་ཛ(གནས་སྡོད་གནས་ཚད)གསར་བཟོ་དང་ལམ་ལུགས་ལུ་གྲོགས་རམ་འབདཝ་ཨིན་ན?',
      q34: 'ཀུམ་པ་ནི་འདི་ནང་ལཱ་འབད་བའི་ཐོག་ལས་ཕ་ཡུལ་ལུ་ལོག་འགྱོ་བའི་སྐབས་ལུ་ཕན་ཐོགས་འབད་མིའི་འཕྲུལ་རིག་སྦྱོང་དོ་ཡོདཔ་སྨོ?',
      q35: 'ཕ་ཡུལ་གྱི་གྲོགས་པོ་ཚུ་ལུ་ཡང་"ཀུམ་པ་ནི་འདི་ནང་ལཱ་འབད་ནི་དེ་ལེགས་ཤོམ་ཨིན་པས"ཟེར་བརྗོདཔ་སྨོ?'
    },
    
    satisfaction: {
      option1: 'ཧ་ཅང་དགའ་སྤོབ།',
      option2: 'འབྲིང་དགའ་སྤོབ།',
      option3: 'གཏན་འཁེལ་མེད།',
      option4: 'འབྲིང་མི་དགའ།',
      option5: 'མི་དགའ།',
      option6: 'ཧ་ལམ་མི་དགའ།'
    },
    
    desire: {
      option1: 'ཧ་ཅང་མཐུན།',
      option2: 'འབྲིང་མཐུན།',
      option3: 'གཏན་འཁེལ་མེད།',
      option4: 'འབྲིང་མི་མཐུན།',
      option5: 'མི་མཐུན།',
      option6: 'ཧ་ལམ་མི་མཐུན།'
    },
    
    understanding: {
      option1: 'ཧ་ཅང་སྲལ།',
      option2: 'འབྲིང་སྲལ།',
      option3: 'གཏན་འཁེལ་མེད།',
      option4: 'འབྲིང་དཀའ།',
      option5: 'དཀའ།',
      option6: 'ཧ་ལམ་དཀའ།'
    },
    
    familiarity: {
      option1: 'ཧ་ཅང་གོམས་འདྲིས།',
      option2: 'འབྲིང་གོམས་འདྲིས།',
      option3: 'གཏན་འཁེལ་མེད།',
      option4: 'འབྲིང་མ་གོམས།',
      option5: 'མ་གོམས།',
      option6: 'ཧ་ལམ་མ་གོམས།'
    },
    
    availability: {
      option1: 'ཧ་ཅང་མང་།',
      option2: 'འབྲིང་མང་།',
      option3: 'གཏན་འཁེལ་མེད།',
      option4: 'འབྲིང་ཉུང་།',
      option5: 'ཉུང་།',
      option6: 'མེད།'
    },
    
    negative: {
      option1: 'མེད།',
      option2: 'ཉུང་།',
      option3: 'གཏན་འཁེལ་མེད།',
      option4: 'མཐའ་དམའ་རེ།',
      option5: 'ཧྲིལ་པོ།',
      option6: 'ཆ་ཚང་།'
    },
    
    errorEmployeeCode: 'ལཱ་གཡོག་པའི་ཨང་རྟགས་འདེམས་གནང་།',
    errorNationality: 'མི་རིགས་འདེམས་གནང་།',
    errorAllQuestions: 'དྲི་བ་ཆ་མཉམ་ལུ་ལན་སྤྲོད་གནང་།',
    errorDuplicate: 'ལཱ་གཡོག་པའི་ཨང་རྟགས་ {code} གིས་ཟླ་བ་འདི་ནང་ཧེ་མ་ལས་ལན་སྤྲོད་ཡོདཔ། ({date})',
    
    completionTitle: 'མཐུན་འགྱུར་ལུ་བཀའ་དྲིན་ཆེ།',
    completionMessage: 'ཁྱོད་ཀྱི་ལན་དེ་ཉེན་སྲུང་ནང་ཉར་ཚགས་བཞག་ཡོད།',
    completionAutoClose: 'ཤོག་ལེབ་འདི་རང་བཞིན་གྱིས་ཁ་བསྡམས་འོང་།',
    completionRemaining: 'ལྷག་མ།',
    completionSeconds: 'སྐར་ཆ།',
    
    footerInfo: 'དུས་ཚོད: ཆ་འཕྲོས་ 5-10 སྐར་མ།'
  },

  // ===========================
  // ウズベク語 (新規)
  // ===========================
  uz: {
    title: 'Ishonch bilan javob bering | Ish joyidagi so\'rovnoma',
    languageLabel: 'Tilni tanlang',
    anonymousMessage: 'Sizning ismingiz yozilmaydi',
    anonymousSubMessage: 'Iltimos, halol javob bering',
    employeeCodeLabel: 'Xodim kodi',
    employeeCodePlaceholder: '1 dan 20 gacha raqamni tanlang',
    nationalityLabel: 'Millati',
    nationalityPlaceholder: 'Iltimos, millatni tanlang',
    startButton: 'So\'rovnomani boshlash',
    submitButton: 'Natijani ko\'rish',
    
    nationalities: {
      vietnam: 'Vetnam',
      cambodia: 'Kambodja',
      india: 'Hindiston',
      philippines: 'Filippin',
      laos: 'Laos',
      mongolia: 'Mo\'g\'uliston',
      bangladesh: 'Bangladesh',
      srilanka: 'Shri-Lanka',
      myanmar: 'Myanma',
      bhutan: 'Butan',
      uzbekistan: 'O\'zbekiston',
      pakistan: 'Pokiston',
      thailand: 'Tailand',
      indonesia: 'Indoneziya',
      nepal: 'Nepal',
      china: 'Xitoy'
    },
    
    categories: {
      work: '1. Ish va ish joyi muhiti',
      salary: '2. Maosh va imtiyozlar',
      family: '3. Oila va shaxsiy',
      relationship: '4. Insoniy munosabatlar',
      communication: '5. Yapon tili va aloqa',
      culture: '6. Madaniyat va qadriyatlar',
      living: '7. Yashash muhiti',
      career: '8. Martaba va kelajak'
    },
    
    questions: {
      q1: 'Ish mazmuni sizga mos keladimi?',
      q2: 'Ish joyi xavfsiz deb o\'ylaysizmi?',
      q3: 'Dam olish kunlari va ish vaqti qulaymi?',
      q4: 'Ish joyi muhiti ishlashga qulayma?',
      q5: 'Maosh miqdoridan qoniqasizmi?',
      q6: 'Qo\'shimcha ish haqi va nafaqalarni to\'g\'ri olayapsizmi?',
      q7: 'Sug\'urta va dam olish kabi tizimlar yetarlimi?',
      q8: 'Bu kompaniyada ishlash orqali yashash uchun yetarli pul olayapsizmi?',
      q9: 'Oila bilan aloqa qilish uchun yetarli vaqt bormi?',
      q10: 'Oilaga pul yuborish imkoniyatingiz bormi?',
      q11: 'O\'z vaqtingiz (dam olish va shaxsiy) yetarlimi?',
      q12: 'Kelajakda oilangizni Yaponiyaga olib kelishni xohlaysizmi?',
      q13: 'Boshqa stajyorlar bilan munosabatlar yaxshimi?',
      q14: 'Yapon rahbarlari va hamkasblari sizning gapingizni tinglaydimi?',
      q15: 'Qiyinchilik tug\'ilganda boshqa stajyorlar yordam beradimi?',
      q16: 'Ish joyida ta\'qib yoki kamsitish bormi?',
      q17: 'Yapon tilida gaplashishda qiyinchilik bormi?',
      q18: 'Ish tushuntirishlari va ko\'rsatmalari tushunarli mi?',
      q19: 'Tushunmagan narsani so\'rash osonmi?',
      q20: 'Kompaniya yapon tilini o\'rganishga yordam beradimi?',
      q21: 'Ona tilida maslahat olish mumkin bo\'lgan odam (tarjimon, katta) bormi?',
      q22: 'Yaponiya madaniyati va urf-odatlariga o\'rganib qoldingizmi?',
      q23: 'Ishda madaniy farqlar tufayli qiyinchilik bormi?',
      q24: 'Yashash joyi (yotoqxona, kvartira) qulayma?',
      q25: 'Yashash xarajatlari maoshga nisbatan qulayma?',
      q26: 'Yaponiyada yashashda qiyinchilik bormi?',
      q27: 'Kompaniya hayotni qo\'llab-quvvatlaydimi?',
      q28: 'Yotoqxona yoki uydagi yashash muhiti (xona hajmi, jihozlar) dan qoniqasizmi?',
      q29: 'Yaponiyada hayot xavfsiz va qulayma?',
      q30: 'Hozirgi ishdan texnologiya va bilim o\'rganayapsizmi?',
      q31: 'Harakatingiz baholash va munosabatni yaxshilashini his qilasizmi?',
      q32: 'Bu kompaniyada uzoq muddatli ishlashni xohlaysizmi?',
      q33: 'Kompaniya yoki kasaba uyushmasi viza (yashash holati) yangilash va jarayonlarda yordam beradimi?',
      q34: 'Bu kompaniyada ishlash orqali vatanga qaytganingizda foydali texnologiyani o\'rganayapsizmi?',
      q35: 'Vatandagi do\'stlaringizga "bu kompaniyada ishlash yaxshi" deb aytasizmi?'
    },
    
    satisfaction: {
      option1: 'Juda qoniqarli',
      option2: 'Biroz qoniqarli',
      option3: 'Noaniq',
      option4: 'Biroz qoniqarsiz',
      option5: 'Qoniqarsiz',
      option6: 'Butunlay qoniqarsiz'
    },
    
    desire: {
      option1: 'To\'liq roziman',
      option2: 'Biroz roziman',
      option3: 'Noaniq',
      option4: 'Biroz rozi emasman',
      option5: 'Rozi emasman',
      option6: 'Butunlay rozi emasman'
    },
    
    understanding: {
      option1: 'Juda oson',
      option2: 'Biroz oson',
      option3: 'Noaniq',
      option4: 'Biroz qiyin',
      option5: 'Qiyin',
      option6: 'Butunlay qiyin'
    },
    
    familiarity: {
      option1: 'Juda o\'rganib qolgan',
      option2: 'Biroz o\'rganib qolgan',
      option3: 'Noaniq',
      option4: 'Biroz o\'rganmagan',
      option5: 'O\'rganmagan',
      option6: 'Butunlay o\'rganmagan'
    },
    
    availability: {
      option1: 'Juda ko\'p',
      option2: 'Biroz',
      option3: 'Noaniq',
      option4: 'Kam',
      option5: 'Deyarli yo\'q',
      option6: 'Yo\'q'
    },
    
    negative: {
      option1: 'Yo\'q',
      option2: 'Deyarli yo\'q',
      option3: 'Noaniq',
      option4: 'Ba\'zan',
      option5: 'Tez-tez',
      option6: 'Doimo'
    },
    
    errorEmployeeCode: 'Iltimos, xodim kodini tanlang',
    errorNationality: 'Iltimos, millatni tanlang',
    errorAllQuestions: 'Iltimos, barcha savollarga javob bering',
    errorDuplicate: 'Xodim kodi {code} bu oyda allaqachon javob bergan ({date})',
    
    completionTitle: 'Hamkorlik uchun rahmat!',
    completionMessage: 'Sizning javobingiz xavfsiz saqlandi',
    completionAutoClose: 'Bu sahifa avtomatik ravishda yopiladi',
    completionRemaining: 'Qoldi',
    completionSeconds: 'soniya',
    
    footerInfo: 'Vaqt: Taxminan 5-10 daqiqa'
  },

  // ===========================
  // ウルドゥー語 (パキスタン) (新規)
  // ===========================
  ur: {
    title: 'اعتماد کے ساتھ جواب دیں | کام کی جگہ کا سروے',
    languageLabel: 'زبان منتخب کریں',
    anonymousMessage: 'آپ کا نام ریکارڈ نہیں کیا جائے گا',
    anonymousSubMessage: 'براہ کرم ایمانداری سے جواب دیں',
    employeeCodeLabel: 'ملازم کوڈ',
    employeeCodePlaceholder: '1 سے 20 تک نمبر منتخب کریں',
    nationalityLabel: 'قومیت',
    nationalityPlaceholder: 'براہ کرم قومیت منتخب کریں',
    startButton: 'سروے شروع کریں',
    submitButton: 'نتائج دیکھیں',
    
    nationalities: {
      vietnam: 'ویتنام',
      cambodia: 'کمبوڈیا',
      india: 'بھارت',
      philippines: 'فلپائن',
      laos: 'لاؤس',
      mongolia: 'منگولیا',
      bangladesh: 'بنگلہ دیش',
      srilanka: 'سری لنکا',
      myanmar: 'میانمار',
      bhutan: 'بھوٹان',
      uzbekistan: 'ازبکستان',
      pakistan: 'پاکستان',
      thailand: 'تھائی لینڈ',
      indonesia: 'انڈونیشیا',
      nepal: 'نیپال',
      china: 'چین'
    },
    
    categories: {
      work: '1. کام اور کام کی جگہ کا ماحول',
      salary: '2. تنخواہ اور فوائد',
      family: '3. خاندان اور ذاتی',
      relationship: '4. انسانی تعلقات',
      communication: '5. جاپانی زبان اور رابطہ',
      culture: '6. ثقافت اور اقدار',
      living: '7. رہائش کا ماحول',
      career: '8. کیریئر اور مستقبل'
    },
    
    questions: {
      q1: 'کیا کام کا مواد آپ کے لیے موزوں ہے؟',
      q2: 'کیا آپ کو کام کی جگہ محفوظ لگتی ہے؟',
      q3: 'کیا چھٹیوں کے دن اور کام کا وقت مناسب ہے؟',
      q4: 'کیا کام کی جگہ کا ماحول کام کرنے میں آسان ہے؟',
      q5: 'کیا آپ تنخواہ کی رقم سے مطمئن ہیں؟',
      q6: 'کیا آپ کو اوور ٹائم اور الاؤنس صحیح طریقے سے مل رہا ہے؟',
      q7: 'کیا انشورنس اور چھٹیوں جیسے نظام کافی ہیں؟',
      q8: 'کیا اس کمپنی میں کام کرکے زندگی کے لیے کافی پیسے مل رہے ہیں؟',
      q9: 'کیا خاندان سے رابطے کے لیے کافی وقت ہے؟',
      q10: 'کیا آپ کے پاس خاندان کو پیسے بھیجنے کی صلاحیت ہے؟',
      q11: 'کیا آپ کا اپنا وقت (چھٹی اور ذاتی) کافی ہے؟',
      q12: 'کیا آپ مستقبل میں خاندان کو جاپان لانا چاہتے ہیں؟',
      q13: 'کیا دوسرے تربیت یافتگان کے ساتھ تعلقات اچھے ہیں؟',
      q14: 'کیا جاپانی باس اور ساتھی آپ کی بات سنتے ہیں؟',
      q15: 'کیا مشکل میں دوسرے تربیت یافتگان مدد کرتے ہیں؟',
      q16: 'کیا کام کی جگہ پر تنگ کرنا یا امتیاز ہے؟',
      q17: 'کیا جاپانی میں بات کرنے میں مشکل ہے؟',
      q18: 'کیا کام کی وضاحت اور ہدایات سمجھنے میں آسان ہیں؟',
      q19: 'کیا نہ سمجھنے پر سوال کرنا آسان ہے؟',
      q20: 'کیا کمپنی جاپانی زبان سیکھنے میں مدد کرتی ہے؟',
      q21: 'کیا مادری زبان میں مشورہ لینے والا کوئی (مترجم، سینئر) ہے؟',
      q22: 'کیا آپ جاپانی ثقافت اور رسم و رواج کے عادی ہیں؟',
      q23: 'کیا کام میں ثقافتی فرق سے مشکل ہے؟',
      q24: 'کیا رہائش کی جگہ (ہاسٹل، اپارٹمنٹ) آرام دہ ہے؟',
      q25: 'کیا رہائشی اخراجات تنخواہ کے مقابلے میں مناسب ہیں؟',
      q26: 'کیا جاپان میں رہنے میں مشکل ہے؟',
      q27: 'کیا کمپنی زندگی میں مدد کرتی ہے؟',
      q28: 'کیا آپ ہاسٹل یا گھر میں رہائش کے ماحول (کمرے کا سائز، سہولیات) سے مطمئن ہیں؟',
      q29: 'کیا جاپان میں زندگی محفوظ اور آرام دہ ہے؟',
      q30: 'کیا آپ موجودہ کام سے ٹیکنالوجی اور علم سیکھ رہے ہیں؟',
      q31: 'کیا آپ محسوس کرتے ہیں کہ آپ کی کوشش تشخیص اور سلوک بہتر بنا رہی ہے؟',
      q32: 'کیا آپ اس کمپنی میں لمبے عرصے تک کام کرنا چاہتے ہیں؟',
      q33: 'کیا کمپنی یا یونین ویزا (رہائش کی حیثیت) کی تجدید اور عمل میں مدد کرتی ہے؟',
      q34: 'کیا آپ اس کمپنی میں کام کرکے وطن واپسی پر کارآمد ٹیکنالوجی سیکھ رہے ہیں؟',
      q35: 'کیا آپ وطن کے دوستوں کو "اس کمپنی میں کام کرنا اچھا ہے" کہیں گے؟'
    },
    
    satisfaction: {
      option1: 'بہت مطمئن',
      option2: 'کچھ مطمئن',
      option3: 'غیر یقینی',
      option4: 'کچھ غیر مطمئن',
      option5: 'غیر مطمئن',
      option6: 'مکمل طور پر غیر مطمئن'
    },
    
    desire: {
      option1: 'مکمل طور پر متفق',
      option2: 'کچھ متفق',
      option3: 'غیر یقینی',
      option4: 'کچھ غیر متفق',
      option5: 'غیر متفق',
      option6: 'مکمل طور پر غیر متفق'
    },
    
    understanding: {
      option1: 'بہت آسان',
      option2: 'کچھ آسان',
      option3: 'غیر یقینی',
      option4: 'کچھ مشکل',
      option5: 'مشکل',
      option6: 'مکمل طور پر مشکل'
    },
    
    familiarity: {
      option1: 'بہت عادی',
      option2: 'کچھ عادی',
      option3: 'غیر یقینی',
      option4: 'کچھ غیر عادی',
      option5: 'غیر عادی',
      option6: 'مکمل طور پر غیر عادی'
    },
    
    availability: {
      option1: 'بہت زیادہ',
      option2: 'کچھ',
      option3: 'غیر یقینی',
      option4: 'کم',
      option5: 'تقریباً نہیں',
      option6: 'نہیں'
    },
    
    negative: {
      option1: 'نہیں',
      option2: 'تقریباً نہیں',
      option3: 'غیر یقینی',
      option4: 'کبھی کبھار',
      option5: 'اکثر',
      option6: 'ہمیشہ'
    },
    
    errorEmployeeCode: 'براہ کرم ملازم کوڈ منتخب کریں',
    errorNationality: 'براہ کرم قومیت منتخب کریں',
    errorAllQuestions: 'براہ کرم تمام سوالات کے جواب دیں',
    errorDuplicate: 'ملازم کوڈ {code} نے اس مہینے پہلے ہی جواب دیا ہے ({date})',
    
    completionTitle: 'تعاون کے لیے شکریہ!',
    completionMessage: 'آپ کا جواب محفوظ طریقے سے محفوظ کر لیا گیا ہے',
    completionAutoClose: 'یہ صفحہ خود بخود بند ہو جائے گا',
    completionRemaining: 'باقی',
    completionSeconds: 'سیکنڈ',
    
    footerInfo: 'وقت: تقریباً 5-10 منٹ'
  }
};
};
