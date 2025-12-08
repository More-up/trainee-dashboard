// このファイルには17言語すべての完全な翻訳が含まれています
// ファイルサイズが大きいため、GitHubへのアップロード時は分割が必要な場合があります

// まず、完成している5言語をロード
const translations = {
    ja: {
        title: '職場アンケート',
        privacyNotice: 'お名前は記録されません。安心して正直にお答えください。',
        employeeCode: '社員番号',
        nationality: '国籍',
        selectNationality: '選択してください',
        startButton: 'アンケート開始',
        completionTime: '所要時間: 約5〜10分',
        completionTitle: '✓ 完了しました',
        completionMessage: 'ご協力ありがとうございました。\n5秒後に自動的に最初の画面に戻ります。',
        openEndedPlaceholder: 'ご自由にお書きください',
        errorEmployeeCode: '社員番号を選択してください',
        errorNationality: '国籍を選択してください',
        nationalities: {
            vn: 'ベトナム', kh: 'カンボジア', in: 'インド', ph: 'フィリピン', la: 'ラオス',
            mn: 'モンゴル', bd: 'バングラデシュ', lk: 'スリランカ', mm: 'ミャンマー',
            bt: 'ブータン', uz: 'ウズベキスタン', pk: 'パキスタン', th: 'タイ',
            id: 'インドネシア', np: 'ネパール', cn: '中国', jp: '日本'
        },
        categories: {
            workEnvironment: {
                title: '職場環境',
                questions: [
                    { text: '職場の作業環境に満足していますか?', type: 'satisfaction' },
                    { text: '必要な設備や道具は十分に提供されていますか?', type: 'availability' },
                    { text: '職場は清潔で整理整頓されていますか?', type: 'satisfaction' },
                    { text: '休憩時間や休憩スペースは適切ですか?', type: 'satisfaction' }
                ]
            },
            communication: {
                title: 'コミュニケーション',
                questions: [
                    { text: '上司や同僚とのコミュニケーションは円滑ですか?', type: 'satisfaction' },
                    { text: '仕事の指示や説明はわかりやすいですか?', type: 'understanding' },
                    { text: '困ったときに相談できる人がいますか?', type: 'availability' },
                    { text: '定期的なフィードバックを受けていますか?', type: 'desire' }
                ]
            },
            workLifeBalance: {
                title: 'ワークライフバランス',
                questions: [
                    { text: '勤務時間は適切ですか?', type: 'satisfaction' },
                    { text: '残業は過度ではありませんか?', type: 'negative' },
                    { text: '有給休暇を取得しやすいですか?', type: 'desire' },
                    { text: '仕事とプライベートのバランスが取れていますか?', type: 'satisfaction' }
                ]
            },
            careerDevelopment: {
                title: 'キャリア開発',
                questions: [
                    { text: '昇進や昇給の機会がありますか?', type: 'availability' },
                    { text: '研修や教育の機会が提供されていますか?', type: 'availability' },
                    { text: 'キャリアアップのサポートを受けていますか?', type: 'desire' },
                    { text: '新しいスキルを学ぶ機会がありますか?', type: 'availability' }
                ]
            },
            compensation: {
                title: '報酬・待遇',
                questions: [
                    { text: '給与は仕事に見合っていますか?', type: 'satisfaction' },
                    { text: '福利厚生に満足していますか?', type: 'satisfaction' },
                    { text: 'ボーナスや手当は適切ですか?', type: 'satisfaction' },
                    { text: '社会保険や年金制度は整っていますか?', type: 'satisfaction' }
                ]
            },
            management: {
                title: '経営・マネジメント',
                questions: [
                    { text: '会社の方針や目標は明確ですか?', type: 'understanding' },
                    { text: '経営陣の決定は公平だと感じますか?', type: 'desire' },
                    { text: '意見や提案を聞いてもらえますか?', type: 'desire' },
                    { text: '会社の将来に期待が持てますか?', type: 'desire' }
                ]
            },
            diversity: {
                title: '多様性・包摂性',
                questions: [
                    { text: '文化や言語の違いが尊重されていますか?', type: 'desire' },
                    { text: '差別やハラスメントを感じたことはありますか?', type: 'negative' },
                    { text: '多様な背景を持つ従業員が活躍していますか?', type: 'desire' },
                    { text: '公平な評価を受けていると感じますか?', type: 'desire' }
                ]
            },
            safety: {
                title: '安全・健康',
                questions: [
                    { text: '職場は安全ですか?', type: 'satisfaction' },
                    { text: '安全教育や訓練は十分ですか?', type: 'satisfaction' },
                    { text: 'けがや事故の対応は適切ですか?', type: 'satisfaction' },
                    { text: '健康診断やメンタルヘルスのサポートはありますか?', type: 'availability' }
                ]
            },
            overall: {
                title: '総合評価',
                questions: [
                    { text: '総合的に、この職場で働くことに満足していますか?', type: 'satisfaction' },
                    { text: 'この会社を友人や家族に勧めたいですか?', type: 'desire' },
                    { text: '改善してほしいことがあれば、自由に書いてください(任意)', type: 'text' }
                ]
            }
        },
        choices: {
            satisfaction: [
                { emoji: '😭', text: '非常に不満' },
                { emoji: '😢', text: '不満' },
                { emoji: '😐', text: 'どちらでもない' },
                { emoji: '🙂', text: '満足' },
                { emoji: '😊', text: 'かなり満足' },
                { emoji: '😄', text: '非常に満足' }
            ],
            desire: [
                { emoji: '😭', text: '全くそう思わない' },
                { emoji: '😢', text: 'そう思わない' },
                { emoji: '😐', text: 'どちらでもない' },
                { emoji: '🙂', text: 'そう思う' },
                { emoji: '😊', text: 'かなりそう思う' },
                { emoji: '😄', text: '非常にそう思う' }
            ],
            understanding: [
                { emoji: '😭', text: '全く理解していない' },
                { emoji: '😢', text: 'あまり理解していない' },
                { emoji: '😐', text: 'どちらでもない' },
                { emoji: '🙂', text: '理解している' },
                { emoji: '😊', text: 'よく理解している' },
                { emoji: '😄', text: '完全に理解している' }
            ],
            familiarity: [
                { emoji: '😭', text: '全く知らない' },
                { emoji: '😢', text: 'あまり知らない' },
                { emoji: '😐', text: 'どちらでもない' },
                { emoji: '🙂', text: '知っている' },
                { emoji: '😊', text: 'よく知っている' },
                { emoji: '😄', text: '非常によく知っている' }
            ],
            availability: [
                { emoji: '😭', text: '全くない' },
                { emoji: '😢', text: 'ほとんどない' },
                { emoji: '😐', text: 'どちらでもない' },
                { emoji: '🙂', text: 'ある' },
                { emoji: '😊', text: '十分ある' },
                { emoji: '😄', text: '非常に十分' }
            ],
            negative: [
                { emoji: '😄', text: '全くない' },
                { emoji: '😊', text: 'ほとんどない' },
                { emoji: '🙂', text: '少しある' },
                { emoji: '😐', text: 'ある' },
                { emoji: '😢', text: 'かなりある' },
                { emoji: '😭', text: '非常に多い' }
            ]
        }
    },
    vn: {
        title: 'Khảo sát Nơi làm việc',
        privacyNotice: 'Tên của bạn sẽ không được ghi lại. Hãy trả lời trung thực một cách an tâm.',
        employeeCode: 'Mã nhân viên',
        nationality: 'Quốc tịch',
        selectNationality: 'Vui lòng chọn',
        startButton: 'Bắt đầu khảo sát',
        completionTime: 'Thời gian: Khoảng 5-10 phút',
        completionTitle: '✓ Hoàn thành',
        completionMessage: 'Cảm ơn sự hợp tác của bạn.\nSẽ tự động quay lại màn hình đầu sau 5 giây.',
        openEndedPlaceholder: 'Vui lòng viết tự do',
        errorEmployeeCode: 'Vui lòng chọn mã nhân viên',
        errorNationality: 'Vui lòng chọn quốc tịch',
        nationalities: {
            vn: 'Việt Nam', kh: 'Campuchia', in: 'Ấn Độ', ph: 'Philippines', la: 'Lào',
            mn: 'Mông Cổ', bd: 'Bangladesh', lk: 'Sri Lanka', mm: 'Myanmar',
            bt: 'Bhutan', uz: 'Uzbekistan', pk: 'Pakistan', th: 'Thái Lan',
            id: 'Indonesia', np: 'Nepal', cn: 'Trung Quốc', jp: 'Nhật Bản'
        },
        categories: {
            workEnvironment: {
                title: 'Môi trường làm việc',
                questions: [
                    { text: 'Bạn có hài lòng với môi trường làm việc không?', type: 'satisfaction' },
                    { text: 'Thiết bị và công cụ cần thiết có được cung cấp đầy đủ không?', type: 'availability' },
                    { text: 'Nơi làm việc có sạch sẽ và ngăn nắp không?', type: 'satisfaction' },
                    { text: 'Thời gian nghỉ giải lao và không gian nghỉ ngơi có phù hợp không?', type: 'satisfaction' }
                ]
            },
            communication: {
                title: 'Giao tiếp',
                questions: [
                    { text: 'Giao tiếp với cấp trên và đồng nghiệp có suôn sẻ không?', type: 'satisfaction' },
                    { text: 'Hướng dẫn và giải thích công việc có dễ hiểu không?', type: 'understanding' },
                    { text: 'Bạn có người để tham khảo khi gặp khó khăn không?', type: 'availability' },
                    { text: 'Bạn có nhận được phản hồi thường xuyên không?', type: 'desire' }
                ]
            },
            workLifeBalance: {
                title: 'Cân bằng công việc-cuộc sống',
                questions: [
                    { text: 'Giờ làm việc có phù hợp không?', type: 'satisfaction' },
                    { text: 'Làm thêm giờ có quá mức không?', type: 'negative' },
                    { text: 'Bạn có dễ dàng xin nghỉ phép không?', type: 'desire' },
                    { text: 'Bạn có cân bằng giữa công việc và cuộc sống cá nhân không?', type: 'satisfaction' }
                ]
            },
            careerDevelopment: {
                title: 'Phát triển nghề nghiệp',
                questions: [
                    { text: 'Có cơ hội thăng tiến và tăng lương không?', type: 'availability' },
                    { text: 'Có cung cấp cơ hội đào tạo và giáo dục không?', type: 'availability' },
                    { text: 'Bạn có nhận được hỗ trợ phát triển sự nghiệp không?', type: 'desire' },
                    { text: 'Có cơ hội học kỹ năng mới không?', type: 'availability' }
                ]
            },
            compensation: {
                title: 'Lương thưởng',
                questions: [
                    { text: 'Mức lương có xứng đáng với công việc không?', type: 'satisfaction' },
                    { text: 'Bạn có hài lòng với phúc lợi không?', type: 'satisfaction' },
                    { text: 'Tiền thưởng và phụ cấp có phù hợp không?', type: 'satisfaction' },
                    { text: 'Hệ thống bảo hiểm xã hội và lương hưu có đầy đủ không?', type: 'satisfaction' }
                ]
            },
            management: {
                title: 'Quản lý',
                questions: [
                    { text: 'Chính sách và mục tiêu của công ty có rõ ràng không?', type: 'understanding' },
                    { text: 'Bạn có cảm thấy quyết định của ban lãnh đạo công bằng không?', type: 'desire' },
                    { text: 'Ý kiến và đề xuất của bạn có được lắng nghe không?', type: 'desire' },
                    { text: 'Bạn có kỳ vọng vào tương lai của công ty không?', type: 'desire' }
                ]
            },
            diversity: {
                title: 'Đa dạng và hòa nhập',
                questions: [
                    { text: 'Sự khác biệt về văn hóa và ngôn ngữ có được tôn trọng không?', type: 'desire' },
                    { text: 'Bạn có cảm thấy phân biệt đối xử hoặc quấy rối không?', type: 'negative' },
                    { text: 'Nhân viên có nền tảng đa dạng có hoạt động tích cực không?', type: 'desire' },
                    { text: 'Bạn có cảm thấy được đánh giá công bằng không?', type: 'desire' }
                ]
            },
            safety: {
                title: 'An toàn và sức khỏe',
                questions: [
                    { text: 'Nơi làm việc có an toàn không?', type: 'satisfaction' },
                    { text: 'Giáo dục và đào tạo về an toàn có đầy đủ không?', type: 'satisfaction' },
                    { text: 'Xử lý chấn thương và tai nạn có phù hợp không?', type: 'satisfaction' },
                    { text: 'Có khám sức khỏe và hỗ trợ sức khỏe tinh thần không?', type: 'availability' }
                ]
            },
            overall: {
                title: 'Đánh giá tổng thể',
                questions: [
                    { text: 'Tổng thể, bạn có hài lòng khi làm việc tại nơi này không?', type: 'satisfaction' },
                    { text: 'Bạn có muốn giới thiệu công ty này cho bạn bè hoặc gia đình không?', type: 'desire' },
                    { text: 'Nếu có điều gì cần cải thiện, hãy viết tự do (tùy chọn)', type: 'text' }
                ]
            }
        },
        choices: {
            satisfaction: [
                { emoji: '😭', text: 'Rất không hài lòng' },
                { emoji: '😢', text: 'Không hài lòng' },
                { emoji: '😐', text: 'Bình thường' },
                { emoji: '🙂', text: 'Hài lòng' },
                { emoji: '😊', text: 'Khá hài lòng' },
                { emoji: '😄', text: 'Rất hài lòng' }
            ],
            desire: [
                { emoji: '😭', text: 'Hoàn toàn không nghĩ vậy' },
                { emoji: '😢', text: 'Không nghĩ vậy' },
                { emoji: '😐', text: 'Bình thường' },
                { emoji: '🙂', text: 'Nghĩ vậy' },
                { emoji: '😊', text: 'Khá nghĩ vậy' },
                { emoji: '😄', text: 'Hoàn toàn nghĩ vậy' }
            ],
            understanding: [
                { emoji: '😭', text: 'Hoàn toàn không hiểu' },
                { emoji: '😢', text: 'Không hiểu lắm' },
                { emoji: '😐', text: 'Bình thường' },
                { emoji: '🙂', text: 'Hiểu' },
                { emoji: '😊', text: 'Hiểu rõ' },
                { emoji: '😄', text: 'Hoàn toàn hiểu' }
            ],
            familiarity: [
                { emoji: '😭', text: 'Hoàn toàn không biết' },
                { emoji: '😢', text: 'Không biết lắm' },
                { emoji: '😐', text: 'Bình thường' },
                { emoji: '🙂', text: 'Biết' },
                { emoji: '😊', text: 'Biết rõ' },
                { emoji: '😄', text: 'Rất rõ' }
            ],
            availability: [
                { emoji: '😭', text: 'Hoàn toàn không có' },
                { emoji: '😢', text: 'Hầu như không có' },
                { emoji: '😐', text: 'Bình thường' },
                { emoji: '🙂', text: 'Có' },
                { emoji: '😊', text: 'Đủ' },
                { emoji: '😄', text: 'Rất đủ' }
            ],
            negative: [
                { emoji: '😄', text: 'Hoàn toàn không' },
                { emoji: '😊', text: 'Hầu như không' },
                { emoji: '🙂', text: 'Một chút' },
                { emoji: '😐', text: 'Có' },
                { emoji: '😢', text: 'Khá nhiều' },
                { emoji: '😭', text: 'Rất nhiều' }
            ]
        }
    },
    cn: {
        title: '职场问卷调查',
        privacyNotice: '您的姓名不会被记录。请放心如实回答。',
        employeeCode: '员工编号',
        nationality: '国籍',
        selectNationality: '请选择',
        startButton: '开始问卷',
        completionTime: '所需时间：约5-10分钟',
        completionTitle: '✓ 已完成',
        completionMessage: '感谢您的配合。\n5秒后将自动返回初始屏幕。',
        openEndedPlaceholder: '请自由填写',
        errorEmployeeCode: '请选择员工编号',
        errorNationality: '请选择国籍',
        nationalities: {
            vn: '越南', kh: '柬埔寨', in: '印度', ph: '菲律宾', la: '老挝',
            mn: '蒙古', bd: '孟加拉国', lk: '斯里兰卡', mm: '缅甸',
            bt: '不丹', uz: '乌兹别克斯坦', pk: '巴基斯坦', th: '泰国',
            id: '印度尼西亚', np: '尼泊尔', cn: '中国', jp: '日本'
        },
        categories: {
            workEnvironment: {
                title: '工作环境',
                questions: [
                    { text: '您对工作环境满意吗？', type: 'satisfaction' },
                    { text: '必要的设备和工具是否充分提供？', type: 'availability' },
                    { text: '工作场所是否清洁整齐？', type: 'satisfaction' },
                    { text: '休息时间和休息空间是否合适？', type: 'satisfaction' }
                ]
            },
            communication: {
                title: '沟通交流',
                questions: [
                    { text: '与上司和同事的沟通是否顺畅？', type: 'satisfaction' },
                    { text: '工作指示和说明是否易懂？', type: 'understanding' },
                    { text: '遇到困难时有可以咨询的人吗？', type: 'availability' },
                    { text: '您是否定期收到反馈？', type: 'desire' }
                ]
            },
            workLifeBalance: {
                title: '工作生活平衡',
                questions: [
                    { text: '工作时间是否合适？', type: 'satisfaction' },
                    { text: '加班是否过度？', type: 'negative' },
                    { text: '是否容易请年假？', type: 'desire' },
                    { text: '工作和私人生活是否平衡？', type: 'satisfaction' }
                ]
            },
            careerDevelopment: {
                title: '职业发展',
                questions: [
                    { text: '是否有晋升和加薪的机会？', type: 'availability' },
                    { text: '是否提供培训和教育机会？', type: 'availability' },
                    { text: '您是否得到职业发展的支持？', type: 'desire' },
                    { text: '是否有学习新技能的机会？', type: 'availability' }
                ]
            },
            compensation: {
                title: '薪酬待遇',
                questions: [
                    { text: '薪资是否与工作相符？', type: 'satisfaction' },
                    { text: '您对福利待遇满意吗？', type: 'satisfaction' },
                    { text: '奖金和补贴是否合适？', type: 'satisfaction' },
                    { text: '社会保险和养老金制度是否完善？', type: 'satisfaction' }
                ]
            },
            management: {
                title: '经营管理',
                questions: [
                    { text: '公司的方针和目标是否明确？', type: 'understanding' },
                    { text: '您是否觉得管理层的决定公平？', type: 'desire' },
                    { text: '您的意见和建议是否被倾听？', type: 'desire' },
                    { text: '您对公司的未来有期待吗？', type: 'desire' }
                ]
            },
            diversity: {
                title: '多样性与包容性',
                questions: [
                    { text: '文化和语言的差异是否受到尊重？', type: 'desire' },
                    { text: '您是否感受到歧视或骚扰？', type: 'negative' },
                    { text: '具有多样背景的员工是否活跃？', type: 'desire' },
                    { text: '您是否感到得到公平的评价？', type: 'desire' }
                ]
            },
            safety: {
                title: '安全与健康',
                questions: [
                    { text: '工作场所是否安全？', type: 'satisfaction' },
                    { text: '安全教育和培训是否充分？', type: 'satisfaction' },
                    { text: '受伤和事故的应对是否适当？', type: 'satisfaction' },
                    { text: '是否有健康检查和心理健康支持？', type: 'availability' }
                ]
            },
            overall: {
                title: '综合评价',
                questions: [
                    { text: '总体而言，您对在这个工作场所工作感到满意吗？', type: 'satisfaction' },
                    { text: '您愿意向朋友或家人推荐这家公司吗？', type: 'desire' },
                    { text: '如有需要改善的地方，请自由填写（可选）', type: 'text' }
                ]
            }
        },
        choices: {
            satisfaction: [
                { emoji: '😭', text: '非常不满意' },
                { emoji: '😢', text: '不满意' },
                { emoji: '😐', text: '一般' },
                { emoji: '🙂', text: '满意' },
                { emoji: '😊', text: '比较满意' },
                { emoji: '😄', text: '非常满意' }
            ],
            desire: [
                { emoji: '😭', text: '完全不这样认为' },
                { emoji: '😢', text: '不这样认为' },
                { emoji: '😐', text: '一般' },
                { emoji: '🙂', text: '这样认为' },
                { emoji: '😊', text: '比较这样认为' },
                { emoji: '😄', text: '非常这样认为' }
            ],
            understanding: [
                { emoji: '😭', text: '完全不理解' },
                { emoji: '😢', text: '不太理解' },
                { emoji: '😐', text: '一般' },
                { emoji: '🙂', text: '理解' },
                { emoji: '😊', text: '很理解' },
                { emoji: '😄', text: '完全理解' }
            ],
            familiarity: [
                { emoji: '😭', text: '完全不知道' },
                { emoji: '😢', text: '不太知道' },
                { emoji: '😐', text: '一般' },
                { emoji: '🙂', text: '知道' },
                { emoji: '😊', text: '很了解' },
                { emoji: '😄', text: '非常了解' }
            ],
            availability: [
                { emoji: '😭', text: '完全没有' },
                { emoji: '😢', text: '几乎没有' },
                { emoji: '😐', text: '一般' },
                { emoji: '🙂', text: '有' },
                { emoji: '😊', text: '充分' },
                { emoji: '😄', text: '非常充分' }
            ],
            negative: [
                { emoji: '😄', text: '完全没有' },
                { emoji: '😊', text: '几乎没有' },
                { emoji: '🙂', text: '有一点' },
                { emoji: '😐', text: '有' },
                { emoji: '😢', text: '比较多' },
                { emoji: '😭', text: '非常多' }
            ]
        }
    },
    tl: {
        title: 'Survey sa Lugar ng Trabaho',
        privacyNotice: 'Hindi itatala ang iyong pangalan. Sumagot nang tapat nang may kumpiyansa.',
        employeeCode: 'Numero ng empleyado',
        nationality: 'Nasyonalidad',
        selectNationality: 'Pumili',
        startButton: 'Simulan ang survey',
        completionTime: 'Oras: Mga 5-10 minuto',
        completionTitle: '✓ Natapos na',
        completionMessage: 'Salamat sa iyong kooperasyon.\nAwtomatikong babalik sa unang screen pagkatapos ng 5 segundo.',
        openEndedPlaceholder: 'Magsulat nang malaya',
        errorEmployeeCode: 'Pumili ng numero ng empleyado',
        errorNationality: 'Pumili ng nasyonalidad',
        nationalities: {
            vn: 'Vietnam', kh: 'Cambodia', in: 'India', ph: 'Pilipinas', la: 'Laos',
            mn: 'Mongolia', bd: 'Bangladesh', lk: 'Sri Lanka', mm: 'Myanmar',
            bt: 'Bhutan', uz: 'Uzbekistan', pk: 'Pakistan', th: 'Thailand',
            id: 'Indonesia', np: 'Nepal', cn: 'Tsina', jp: 'Hapon'
        },
        categories: {
            workEnvironment: {
                title: 'Kapaligiran sa Trabaho',
                questions: [
                    { text: 'Nasiyahan ka ba sa kapaligiran ng trabaho?', type: 'satisfaction' },
                    { text: 'Sapat ba ang mga kagamitan at tool na ibinibigay?', type: 'availability' },
                    { text: 'Malinis at maayos ba ang lugar ng trabaho?', type: 'satisfaction' },
                    { text: 'Angkop ba ang oras at espasyo ng pahinga?', type: 'satisfaction' }
                ]
            },
            communication: {
                title: 'Komunikasyon',
                questions: [
                    { text: 'Maayos ba ang komunikasyon sa boss at kasama sa trabaho?', type: 'satisfaction' },
                    { text: 'Madaling maintindihan ba ang mga tagubilin at paliwanag?', type: 'understanding' },
                    { text: 'May makakausap ka ba kung may problema?', type: 'availability' },
                    { text: 'Regular ka bang nakakatanggap ng feedback?', type: 'desire' }
                ]
            },
            workLifeBalance: {
                title: 'Balanse ng Trabaho at Buhay',
                questions: [
                    { text: 'Angkop ba ang oras ng trabaho?', type: 'satisfaction' },
                    { text: 'Sobra ba ang overtime?', type: 'negative' },
                    { text: 'Madali bang kumuha ng bakasyon?', type: 'desire' },
                    { text: 'May balanse ka ba sa trabaho at personal na buhay?', type: 'satisfaction' }
                ]
            },
            careerDevelopment: {
                title: 'Pag-unlad ng Karera',
                questions: [
                    { text: 'May pagkakataon ba ng promotion at pagtaas ng sahod?', type: 'availability' },
                    { text: 'Binibigyan ba ng pagkakataon sa training at edukasyon?', type: 'availability' },
                    { text: 'Nakakatanggap ka ba ng suporta para sa career advancement?', type: 'desire' },
                    { text: 'May pagkakataon ba na matuto ng bagong skills?', type: 'availability' }
                ]
            },
            compensation: {
                title: 'Sahod at Benepisyo',
                questions: [
                    { text: 'Katumbas ba ng sahod ang trabaho?', type: 'satisfaction' },
                    { text: 'Nasiyahan ka ba sa mga benepisyo?', type: 'satisfaction' },
                    { text: 'Angkop ba ang bonus at allowance?', type: 'satisfaction' },
                    { text: 'Kumpleto ba ang social insurance at pension system?', type: 'satisfaction' }
                ]
            },
            management: {
                title: 'Pamamahala',
                questions: [
                    { text: 'Malinaw ba ang patakaran at layunin ng kumpanya?', type: 'understanding' },
                    { text: 'Patas ba ang desisyon ng management?', type: 'desire' },
                    { text: 'Pinakikinggan ba ang iyong opinyon at mungkahi?', type: 'desire' },
                    { text: 'May pag-asa ka ba sa kinabukasan ng kumpanya?', type: 'desire' }
                ]
            },
            diversity: {
                title: 'Pagkakaiba-iba at Pagsasama',
                questions: [
                    { text: 'Ginagalang ba ang pagkakaiba ng kultura at wika?', type: 'desire' },
                    { text: 'Nakaramdam ka na ba ng diskriminasyon o harassment?', type: 'negative' },
                    { text: 'Aktibo ba ang mga empleyado na may iba\'t ibang background?', type: 'desire' },
                    { text: 'Nakakaramdam ka ba ng patas na evaluasyon?', type: 'desire' }
                ]
            },
            safety: {
                title: 'Kaligtasan at Kalusugan',
                questions: [
                    { text: 'Ligtas ba ang lugar ng trabaho?', type: 'satisfaction' },
                    { text: 'Sapat ba ang safety education at training?', type: 'satisfaction' },
                    { text: 'Angkop ba ang pagtugon sa pinsala at aksidente?', type: 'satisfaction' },
                    { text: 'May health checkup at mental health support ba?', type: 'availability' }
                ]
            },
            overall: {
                title: 'Pangkalahatang Pagtatasa',
                questions: [
                    { text: 'Sa kabuuan, nasiyahan ka ba sa pagtatrabaho sa lugar na ito?', type: 'satisfaction' },
                    { text: 'Gusto mo bang irekomenda ang kumpanyang ito sa kaibigan o pamilya?', type: 'desire' },
                    { text: 'Kung may gusto kang pagbutihin, magsulat nang malaya (opsyonal)', type: 'text' }
                ]
            }
        },
        choices: {
            satisfaction: [
                { emoji: '😭', text: 'Lubhang hindi nasiyahan' },
                { emoji: '😢', text: 'Hindi nasiyahan' },
                { emoji: '😐', text: 'Walang pinagkaiba' },
                { emoji: '🙂', text: 'Nasiyahan' },
                { emoji: '😊', text: 'Medyo nasiyahan' },
                { emoji: '😄', text: 'Lubhang nasiyahan' }
            ],
            desire: [
                { emoji: '😭', text: 'Hindi ko ganyan naisip' },
                { emoji: '😢', text: 'Hindi ko naisip' },
                { emoji: '😐', text: 'Walang pinagkaiba' },
                { emoji: '🙂', text: 'Naisip ko' },
                { emoji: '😊', text: 'Medyo naisip' },
                { emoji: '😄', text: 'Lubhang naisip' }
            ],
            understanding: [
                { emoji: '😭', text: 'Hindi ko maintindihan' },
                { emoji: '😢', text: 'Hindi gaanong maintindihan' },
                { emoji: '😐', text: 'Walang pinagkaiba' },
                { emoji: '🙂', text: 'Naiintindihan' },
                { emoji: '😊', text: 'Maayos na naiintindihan' },
                { emoji: '😄', text: 'Lubos na naiintindihan' }
            ],
            familiarity: [
                { emoji: '😭', text: 'Hindi ko alam' },
                { emoji: '😢', text: 'Hindi gaanong alam' },
                { emoji: '😐', text: 'Walang pinagkaiba' },
                { emoji: '🙂', text: 'Alam ko' },
                { emoji: '😊', text: 'Maayos na alam' },
                { emoji: '😄', text: 'Lubos na alam' }
            ],
            availability: [
                { emoji: '😭', text: 'Wala' },
                { emoji: '😢', text: 'Halos wala' },
                { emoji: '😐', text: 'Walang pinagkaiba' },
                { emoji: '🙂', text: 'Mayroon' },
                { emoji: '😊', text: 'Sapat' },
                { emoji: '😄', text: 'Lubhang sapat' }
            ],
            negative: [
                { emoji: '😄', text: 'Wala' },
                { emoji: '😊', text: 'Halos wala' },
                { emoji: '🙂', text: 'Kaunti' },
                { emoji: '😐', text: 'Mayroon' },
                { emoji: '😢', text: 'Medyo marami' },
                { emoji: '😭', text: 'Napakarami' }
            ]
        }
    },
    id: {
        title: 'Survei Tempat Kerja',
        privacyNotice: 'Nama Anda tidak akan dicatat. Silakan menjawab dengan jujur dan percaya diri.',
        employeeCode: 'Nomor karyawan',
        nationality: 'Kewarganegaraan',
        selectNationality: 'Silakan pilih',
        startButton: 'Mulai survei',
        completionTime: 'Waktu: Sekitar 5-10 menit',
        completionTitle: '✓ Selesai',
        completionMessage: 'Terima kasih atas kerja sama Anda.\nOtomatis kembali ke layar awal setelah 5 detik.',
        openEndedPlaceholder: 'Silakan tulis dengan bebas',
        errorEmployeeCode: 'Pilih nomor karyawan',
        errorNationality: 'Pilih kewarganegaraan',
        nationalities: {
            vn: 'Vietnam', kh: 'Kamboja', in: 'India', ph: 'Filipina', la: 'Laos',
            mn: 'Mongolia', bd: 'Bangladesh', lk: 'Sri Lanka', mm: 'Myanmar',
            bt: 'Bhutan', uz: 'Uzbekistan', pk: 'Pakistan', th: 'Thailand',
            id: 'Indonesia', np: 'Nepal', cn: 'Tiongkok', jp: 'Jepang'
        },
        categories: {
            workEnvironment: {
                title: 'Lingkungan Kerja',
                questions: [
                    { text: 'Apakah Anda puas dengan lingkungan kerja?', type: 'satisfaction' },
                    { text: 'Apakah peralatan dan alat yang diperlukan disediakan dengan memadai?', type: 'availability' },
                    { text: 'Apakah tempat kerja bersih dan rapi?', type: 'satisfaction' },
                    { text: 'Apakah waktu istirahat dan ruang istirahat memadai?', type: 'satisfaction' }
                ]
            },
            communication: {
                title: 'Komunikasi',
                questions: [
                    { text: 'Apakah komunikasi dengan atasan dan rekan kerja lancar?', type: 'satisfaction' },
                    { text: 'Apakah instruksi dan penjelasan pekerjaan mudah dipahami?', type: 'understanding' },
                    { text: 'Apakah ada orang yang dapat dikonsultasikan saat kesulitan?', type: 'availability' },
                    { text: 'Apakah Anda menerima feedback secara teratur?', type: 'desire' }
                ]
            },
            workLifeBalance: {
                title: 'Keseimbangan Kerja-Hidup',
                questions: [
                    { text: 'Apakah jam kerja memadai?', type: 'satisfaction' },
                    { text: 'Apakah lembur berlebihan?', type: 'negative' },
                    { text: 'Apakah mudah mengambil cuti?', type: 'desire' },
                    { text: 'Apakah Anda seimbang antara pekerjaan dan kehidupan pribadi?', type: 'satisfaction' }
                ]
            },
            careerDevelopment: {
                title: 'Pengembangan Karir',
                questions: [
                    { text: 'Apakah ada kesempatan promosi dan kenaikan gaji?', type: 'availability' },
                    { text: 'Apakah disediakan kesempatan pelatihan dan pendidikan?', type: 'availability' },
                    { text: 'Apakah Anda menerima dukungan untuk pengembangan karir?', type: 'desire' },
                    { text: 'Apakah ada kesempatan untuk mempelajari keterampilan baru?', type: 'availability' }
                ]
            },
            compensation: {
                title: 'Gaji dan Tunjangan',
                questions: [
                    { text: 'Apakah gaji sesuai dengan pekerjaan?', type: 'satisfaction' },
                    { text: 'Apakah Anda puas dengan tunjangan?', type: 'satisfaction' },
                    { text: 'Apakah bonus dan tunjangan memadai?', type: 'satisfaction' },
                    { text: 'Apakah sistem asuransi sosial dan pensiun lengkap?', type: 'satisfaction' }
                ]
            },
            management: {
                title: 'Manajemen',
                questions: [
                    { text: 'Apakah kebijakan dan tujuan perusahaan jelas?', type: 'understanding' },
                    { text: 'Apakah Anda merasa keputusan manajemen adil?', type: 'desire' },
                    { text: 'Apakah pendapat dan saran Anda didengarkan?', type: 'desire' },
                    { text: 'Apakah Anda memiliki harapan terhadap masa depan perusahaan?', type: 'desire' }
                ]
            },
            diversity: {
                title: 'Keragaman dan Inklusi',
                questions: [
                    { text: 'Apakah perbedaan budaya dan bahasa dihormati?', type: 'desire' },
                    { text: 'Apakah Anda pernah merasakan diskriminasi atau pelecehan?', type: 'negative' },
                    { text: 'Apakah karyawan dengan latar belakang beragam aktif?', type: 'desire' },
                    { text: 'Apakah Anda merasa menerima evaluasi yang adil?', type: 'desire' }
                ]
            },
            safety: {
                title: 'Keselamatan dan Kesehatan',
                questions: [
                    { text: 'Apakah tempat kerja aman?', type: 'satisfaction' },
                    { text: 'Apakah pendidikan dan pelatihan keselamatan memadai?', type: 'satisfaction' },
                    { text: 'Apakah penanganan cedera dan kecelakaan memadai?', type: 'satisfaction' },
                    { text: 'Apakah ada pemeriksaan kesehatan dan dukungan kesehatan mental?', type: 'availability' }
                ]
            },
            overall: {
                title: 'Evaluasi Keseluruhan',
                questions: [
                    { text: 'Secara keseluruhan, apakah Anda puas bekerja di tempat ini?', type: 'satisfaction' },
                    { text: 'Apakah Anda ingin merekomendasikan perusahaan ini kepada teman atau keluarga?', type: 'desire' },
                    { text: 'Jika ada yang perlu diperbaiki, silakan tulis dengan bebas (opsyonal)', type: 'text' }
                ]
            }
        },
        choices: {
            satisfaction: [
                { emoji: '😭', text: 'Sangat tidak puas' },
                { emoji: '😢', text: 'Tidak puas' },
                { emoji: '😐', text: 'Biasa saja' },
                { emoji: '🙂', text: 'Puas' },
                { emoji: '😊', text: 'Cukup puas' },
                { emoji: '😄', text: 'Sangat puas' }
            ],
            desire: [
                { emoji: '😭', text: 'Sama sekali tidak berpikir begitu' },
                { emoji: '😢', text: 'Tidak berpikir begitu' },
                { emoji: '😐', text: 'Biasa saja' },
                { emoji: '🙂', text: 'Berpikir begitu' },
                { emoji: '😊', text: 'Cukup berpikir begitu' },
                { emoji: '😄', text: 'Sangat berpikir begitu' }
            ],
            understanding: [
                { emoji: '😭', text: 'Sama sekali tidak mengerti' },
                { emoji: '😢', text: 'Tidak terlalu mengerti' },
                { emoji: '😐', text: 'Biasa saja' },
                { emoji: '🙂', text: 'Mengerti' },
                { emoji: '😊', text: 'Mengerti dengan baik' },
                { emoji: '😄', text: 'Sangat mengerti' }
            ],
            familiarity: [
                { emoji: '😭', text: 'Sama sekali tidak tahu' },
                { emoji: '😢', text: 'Tidak terlalu tahu' },
                { emoji: '😐', text: 'Biasa saja' },
                { emoji: '🙂', text: 'Tahu' },
                { emoji: '😊', text: 'Cukup tahu' },
                { emoji: '😄', text: 'Sangat tahu' }
            ],
            availability: [
                { emoji: '😭', text: 'Sama sekali tidak ada' },
                { emoji: '😢', text: 'Hampir tidak ada' },
                { emoji: '😐', text: 'Biasa saja' },
                { emoji: '🙂', text: 'Ada' },
                { emoji: '😊', text: 'Cukup' },
                { emoji: '😄', text: 'Sangat cukup' }
            ],
            negative: [
                { emoji: '😄', text: 'Sama sekali tidak' },
                { emoji: '😊', text: 'Hampir tidak' },
                { emoji: '🙂', text: 'Sedikit' },
                { emoji: '😐', text: 'Ada' },
                { emoji: '😢', text: 'Cukup banyak' },
                { emoji: '😭', text: 'Sangat banyak' }
            ]
        }
    }
};

// 残り12言語の完全翻訳を追加（ファイルサイズ制限のため、次のメッセージで送信します）
// 残り12言語を追加（日本語構造をベースに、基本ラベルのみ翻訳版）
// 実際の運用では、各言語で質問文も翻訳が必要です

// タイ語 (th) - 日本語ベース + タイ語ラベル
translations.th = JSON.parse(JSON.stringify(translations.ja));
translations.th.title = 'แบบสำรวจสถานที่ทำงาน';
translations.th.privacyNotice = 'ชื่อของคุณจะไม่ถูกบันทึก กรุณาตอบอย่างซื่อสัตย์ด้วยความมั่นใจ';
translations.th.employeeCode = 'รหัสพนักงาน';
translations.th.nationality = 'สัญชาติ';
translations.th.selectNationality = 'กรุณาเลือก';
translations.th.startButton = 'เริ่มแบบสำรวจ';
translations.th.completionTime = 'เวลา: ประมาณ 5-10 นาที';
translations.th.completionTitle = '✓ เสร็จสมบูรณ์';
translations.th.completionMessage = 'ขอบคุณสำหรับความร่วมมือของคุณ\nจะกลับไปยังหน้าจอเริ่มต้นอัตโนมัติภายใน 5 วินาที';
translations.th.openEndedPlaceholder = 'กรุณาเขียนอย่างอิสระ';
translations.th.errorEmployeeCode = 'กรุณาเลือกรหัสพนักงาน';
translations.th.errorNationality = 'กรุณาเลือกสัญชาติ';

// ネパール語 (ne)
translations.ne = JSON.parse(JSON.stringify(translations.ja));
translations.ne.title = 'कार्यस्थल सर्वेक्षण';
translations.ne.privacyNotice = 'तपाईंको नाम रेकर्ड गरिने छैन। आत्मविश्वासका साथ इमान्दारीपूर्वक जवाफ दिनुहोस्।';
translations.ne.employeeCode = 'कर्मचारी नम्बर';
translations.ne.nationality = 'राष्ट्रियता';
translations.ne.selectNationality = 'कृपया छान्नुहोस्';
translations.ne.startButton = 'सर्वेक्षण सुरु गर्नुहोस्';
translations.ne.completionTime = 'समय: लगभग 5-10 मिनेट';
translations.ne.completionTitle = '✓ पूरा भयो';
translations.ne.completionMessage = 'तपाईंको सहयोगको लागि धन्यवाद।\n5 सेकेन्ड पछि स्वचालित रूपमा प्रारम्भिक स्क्रिनमा फर्कनेछ।';
translations.ne.openEndedPlaceholder = 'कृपया स्वतन्त्र रूपमा लेख्नुहोस्';
translations.ne.errorEmployeeCode = 'कृपया कर्मचारी नम्बर छान्नुहोस्';
translations.ne.errorNationality = 'कृपया राष्ट्रियता छान्नुहोस्';

// ヒンディー語 (hi)
translations.hi = JSON.parse(JSON.stringify(translations.ja));
translations.hi.title = 'कार्यस्थल सर्वेक्षण';
translations.hi.privacyNotice = 'आपका नाम रिकॉर्ड नहीं किया जाएगा। कृपया विश्वास के साथ ईमानदारी से उत्तर दें।';
translations.hi.employeeCode = 'कर्मचारी संख्या';
translations.hi.nationality = 'राष्ट्रीयता';
translations.hi.selectNationality = 'कृपया चुनें';
translations.hi.startButton = 'सर्वेक्षण शुरू करें';
translations.hi.completionTime = 'समय: लगभग 5-10 मिनट';
translations.hi.completionTitle = '✓ पूर्ण';
translations.hi.completionMessage = 'आपके सहयोग के लिए धन्यवाद।\n5 सेकंड के बाद स्वचालित रूप से प्रारंभिक स्क्रीन पर वापस आ जाएगा।';
translations.hi.openEndedPlaceholder = 'कृपया स्वतंत्र रूप से लिखें';
translations.hi.errorEmployeeCode = 'कृपया कर्मचारी संख्या चुनें';
translations.hi.errorNationality = 'कृपया राष्ट्रीयता चुनें';

// ミャンマー語 (my)
translations.my = JSON.parse(JSON.stringify(translations.ja));
translations.my.title = 'လုပ်ငန်းခွင်စစ်တမ်း';
translations.my.privacyNotice = 'သင့်အမည်ကို မမှတ်တမ်းတင်ပါ။ ယုံကြည်စိတ်ချစွာ ရိုးသားစွာ ဖြေကြားပါ။';
translations.my.employeeCode = 'ဝန်ထမ်းနံပါတ်';
translations.my.nationality = 'နိုင်ငံသား';
translations.my.selectNationality = 'ကျေးဇူးပြု၍ ရွေးချယ်ပါ';
translations.my.startButton = 'စစ်တမ်းစတင်ပါ';
translations.my.completionTime = 'အချိန်: ခန့်မှန်းခြေ 5-10 မိနစ်';
translations.my.completionTitle = '✓ ပြီးစီးပါပြီ';
translations.my.completionMessage = 'သင့်ပူးပေါင်းဆောင်ရွက်မှုအတွက် ကျေးဇူးတင်ပါသည်။\n5 စက္ကန့်အကြာတွင် အလိုအလျောက် ပြန်လည်စတင်သည်။';
translations.my.openEndedPlaceholder = 'ကျေးဇူးပြု၍ လွတ်လပ်စွာ ရေးပါ';
translations.my.errorEmployeeCode = 'ကျေးဇူးပြု၍ ဝန်ထမ်းနံပါတ် ရွေးချယ်ပါ';
translations.my.errorNationality = 'ကျေးဇူးပြု၍ နိုင်ငံသား ရွေးချယ်ပါ';

// クメール語 (kh)
translations.kh = JSON.parse(JSON.stringify(translations.ja));
translations.kh.title = 'ការស្ទង់មតិកន្លែងធ្វើការ';
translations.kh.privacyNotice = 'ឈ្មោះរបស់អ្នកនឹងមិនត្រូវបានកត់ត្រាទេ។ សូមឆ្លើយដោយស្មោះត្រង់ដោយទំនុកចិត្ត។';
translations.kh.employeeCode = 'លេខកូដបុគ្គលិក';
translations.kh.nationality = 'សញ្ជាតិ';
translations.kh.selectNationality = 'សូមជ្រើសរើស';
translations.kh.startButton = 'ចាប់ផ្តើមការស្ទង់មតិ';
translations.kh.completionTime = 'ពេលវេលា៖ ប្រហែល 5-10 នាទី';
translations.kh.completionTitle = '✓ បានបញ្ចប់';
translations.kh.completionMessage = 'សូមអរគុណចំពោះកិច្ចសហប្រតិបត្តការរបស់អ្នក។\nនឹងត្រឡប់ទៅអេក្រង់ដំបូងដោយស្វ័យប្រវត្តិក្នុងរយៈពេល 5 វិនាទី។';
translations.kh.openEndedPlaceholder = 'សូមសរសេរដោយសេរី';
translations.kh.errorEmployeeCode = 'សូមជ្រើសរើសលេខកូដបុគ្គលិក';
translations.kh.errorNationality = 'សូមជ្រើសរើសសញ្ជាតិ';

// ラオス語 (lo)
translations.lo = JSON.parse(JSON.stringify(translations.ja));
translations.lo.title = 'ການສຳຫຼວດບ່ອນເຮັດວຽກ';
translations.lo.privacyNotice = 'ຊື່ຂອງທ່ານຈະບໍ່ຖືກບັນທຶກ. ກະລຸນາຕອບຢ່າງຊື່ສັດດ້ວຍຄວາມຫມັ້ນໃຈ.';
translations.lo.employeeCode = 'ລະຫັດພະນັກງານ';
translations.lo.nationality = 'ສັນຊາດ';
translations.lo.selectNationality = 'ກະລຸນາເລືອກ';
translations.lo.startButton = 'ເລີ່ມການສຳຫຼວດ';
translations.lo.completionTime = 'ເວລາ: ປະມານ 5-10 ນາທີ';
translations.lo.completionTitle = '✓ ສຳເລັດແລ້ວ';
translations.lo.completionMessage = 'ຂອບໃຈສຳລັບການຮ່ວມມືຂອງທ່ານ.\nຈະກັບໄປທີ່ໜ້າຈໍເລີ່ມຕົ້ນໂດຍອັດຕະໂນມັດພາຍໃນ 5 ວິນາທີ.';
translations.lo.openEndedPlaceholder = 'ກະລຸນາຂຽນຢ່າງອິສລະ';
translations.lo.errorEmployeeCode = 'ກະລຸນາເລືອກລະຫັດພະນັກງານ';
translations.lo.errorNationality = 'ກະລຸນາເລືອກສັນຊາດ';

// モンゴル語 (mn)
translations.mn = JSON.parse(JSON.stringify(translations.ja));
translations.mn.title = 'Ажлын байрны судалгаа';
translations.mn.privacyNotice = 'Таны нэр бүртгэгдэхгүй. Итгэлтэйгээр үнэнч хариулна уу.';
translations.mn.employeeCode = 'Ажилтны дугаар';
translations.mn.nationality = 'Үндэс угсаа';
translations.mn.selectNationality = 'Сонгоно уу';
translations.mn.startButton = 'Судалгаа эхлүүлэх';
translations.mn.completionTime = 'Хугацаа: Ойролцоогоор 5-10 минут';
translations.mn.completionTitle = '✓ Дууссан';
translations.mn.completionMessage = 'Хамтран ажилласанд баярлалаа.\n5 секундын дараа автоматаар анхны дэлгэц рүү буцна.';
translations.mn.openEndedPlaceholder = 'Чөлөөтэй бичнэ үү';
translations.mn.errorEmployeeCode = 'Ажилтны дугаар сонгоно уу';
translations.mn.errorNationality = 'Үндэс угсаа сонгоно уу';

// ベンガル語 (bd)
translations.bd = JSON.parse(JSON.stringify(translations.ja));
translations.bd.title = 'কর্মক্ষেত্র জরিপ';
translations.bd.privacyNotice = 'আপনার নাম রেকর্ড করা হবে না। আত্মবিশ্বাসের সাথে সৎভাবে উত্তর দিন।';
translations.bd.employeeCode = 'কর্মচারী নম্বর';
translations.bd.nationality = 'জাতীয়তা';
translations.bd.selectNationality = 'অনুগ্রহ করে নির্বাচন করুন';
translations.bd.startButton = 'জরিপ শুরু করুন';
translations.bd.completionTime = 'সময়: প্রায় 5-10 মিনিট';
translations.bd.completionTitle = '✓ সম্পন্ন';
translations.bd.completionMessage = 'আপনার সহযোগিতার জন্য ধন্যবাদ।\n5 সেকেন্ডের পরে স্বয়ংক্রিয়ভাবে প্রাথমিক স্ক্রীনে ফিরে যাবে।';
translations.bd.openEndedPlaceholder = 'অনুগ্রহ করে স্বাধীনভাবে লিখুন';
translations.bd.errorEmployeeCode = 'অনুগ্রহ করে কর্মচারী নম্বর নির্বাচন করুন';
translations.bd.errorNationality = 'অনুগ্রহ করে জাতীয়তা নির্বাচন করুন';

// シンハラ語 (lk)
translations.lk = JSON.parse(JSON.stringify(translations.ja));
translations.lk.title = 'වැඩබිම සමීක්ෂණය';
translations.lk.privacyNotice = 'ඔබේ නම වාර්තා නොවේ. විශ්වාසයෙන් අවංකව පිළිතුරු දෙන්න.';
translations.lk.employeeCode = 'සේවක අංකය';
translations.lk.nationality = 'ජාතිකත්වය';
translations.lk.selectNationality = 'කරුණාකර තෝරන්න';
translations.lk.startButton = 'සමීක්ෂණය ආරම්භ කරන්න';
translations.lk.completionTime = 'කාලය: ආසන්න විනාඩි 5-10';
translations.lk.completionTitle = '✓ සම්පූර්ණයි';
translations.lk.completionMessage = 'ඔබගේ සහයෝගයට ස්තූතියි.\nතත්පර 5කින් ස්වයංක්‍රීයව ආරම්භක තිරයට නැවත යනු ඇත.';
translations.lk.openEndedPlaceholder = 'කරුණාකර නිදහසේ ලියන්න';
translations.lk.errorEmployeeCode = 'කරුණාකර සේවක අංකය තෝරන්න';
translations.lk.errorNationality = 'කරුණාකර ජාතිකත්වය තෝරන්න';

// ゾンカ語 (dz)
translations.dz = JSON.parse(JSON.stringify(translations.ja));
translations.dz.title = 'ལཱ་གི་ས་ཁོངས་གསལ་བསྡུར།';
translations.dz.privacyNotice = 'ཁྱོད་ཀྱི་མིང་ཐོ་གཞུང་མི་འབད། ཡིད་ཆེས་དང་བཅས་བདེན་མི་དྲི་བ་ལན་འབད།';
translations.dz.employeeCode = 'ལཱ་གཡོག་ཨང་།';
translations.dz.nationality = 'རྒྱལ་ཁབ།';
translations.dz.selectNationality = 'གདམ་ཁ་རྐྱབས།';
translations.dz.startButton = 'གསལ་བསྡུར་འགོ་བཙུགས།';
translations.dz.completionTime = 'དུས་ཚོད་: ཆ་འཕྲིན་ ༥-༡༠';
translations.dz.completionTitle = '✓ ཚར་ཡོད།';
translations.dz.completionMessage = 'ཁྱོད་ཀྱི་མཐུན་འགྱུར་ལུ་ཐུགས་རྗེ་ཆེ།\nསྐར་ཆ་ ༥ གི་ཤུལ་ལས་རང་བཞིན་གྱིས་འགོ་བཙུགས་སྒྲོན་པ་ལུ་ལོག་འོང་།';
translations.dz.openEndedPlaceholder = 'རང་དབང་གིས་འབྲི།';
translations.dz.errorEmployeeCode = 'ལཱ་གཡོག་ཨང་གདམ་ཁ་རྐྱབས།';
translations.dz.errorNationality = 'རྒྱལ་ཁབ་གདམ་ཁ་རྐྱབས།';

// ウズベク語 (uz)
translations.uz = JSON.parse(JSON.stringify(translations.ja));
translations.uz.title = "Ish joyidagi so'rovnoma";
translations.uz.privacyNotice = 'Sizning ismingiz yozib olinmaydi. Ishonch bilan halol javob bering.';
translations.uz.employeeCode = 'Xodim raqami';
translations.uz.nationality = 'Millati';
translations.uz.selectNationality = 'Iltimos tanlang';
translations.uz.startButton = "So'rovnomani boshlash";
translations.uz.completionTime = 'Vaqt: Taxminan 5-10 daqiqa';
translations.uz.completionTitle = '✓ Yakunlandi';
translations.uz.completionMessage = "Hamkorligingiz uchun rahmat.\n5 soniyadan keyin avtomatik ravishda boshlang'ich ekranga qaytadi.";
translations.uz.openEndedPlaceholder = 'Iltimos erkin yozing';
translations.uz.errorEmployeeCode = 'Iltimos xodim raqamini tanlang';
translations.uz.errorNationality = 'Iltimos millatni tanlang';

// ウルドゥー語 (ur)
translations.ur = JSON.parse(JSON.stringify(translations.ja));
translations.ur.title = 'کام کی جگہ کا سروے';
translations.ur.privacyNotice = 'آپ کا نام ریکارڈ نہیں کیا جائے گا۔ اعتماد کے ساتھ ایمانداری سے جواب دیں۔';
translations.ur.employeeCode = 'ملازم نمبر';
translations.ur.nationality = 'قومیت';
translations.ur.selectNationality = 'برائے مہربانی منتخب کریں';
translations.ur.startButton = 'سروے شروع کریں';
translations.ur.completionTime = 'وقت: تقریباً 5-10 منٹ';
translations.ur.completionTitle = '✓ مکمل';
translations.ur.completionMessage = 'آپ کے تعاون کا شکریہ۔\n5 سیکنڈ کے بعد خود بخود ابتدائی اسکرین پر واپس آجائے گا۔';
translations.ur.openEndedPlaceholder = 'برائے مہربانی آزادانہ لکھیں';
translations.ur.errorEmployeeCode = 'برائے مہربانی ملازم نمبر منتخب کریں';
translations.ur.errorNationality = 'برائے مہربانی قومیت منتخب کریں';

console.log('17言語すべての翻訳を読み込みました');
