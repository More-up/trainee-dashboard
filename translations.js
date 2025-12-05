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
  }
};
