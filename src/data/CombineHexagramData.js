var combineHexagramData = [
  {
    no: 1,
    code: "111111",
    name: "Thuần Càn",
    description:
      "Kiện dã. Chính yếu. Cứng mạnh, khô, lớn, khỏe mạnh, đức không nghỉ. Tượng vạn vật có khởi đầu, lớn lên, toại chí, hóa thành.",
    meaning:
      "Quẻ đại cát, Thuần Càn là bầu trời rộng lớn, mang ý nghĩa biểu tượng cho sự giàu có, thịnh vượng, phát triển lớn mạnh, mọi chuyện suôn sẻ, hanh thông. Vạn vật sinh sôi. ",
    rate: "Đại Cát",
    rank: "S",
  },
  {
    no: 2,
    code: "000000",
    name: "Thuần Khôn",
    description:
      "Thuận dã. Nhu thuận. Thuận tòng, mềm dẻo, theo đường mà được lợi, hòa theo lẽ, chịu lấy",
    meaning:
      "Quẻ đại cát, Thuần Khôn là đất mẹ bao la, mang ý nghĩa che chở, bao bọc, nhu thuận, biết nhẫn nại, sử dụng mưu trí để đối phó với những hiểm nguy. Quẻ lấy Nhu thắng Cương.",
    rate: "Đại Cát", rank: "S",
  },
  {
    no: 3,
    code: "100010",
    name: "Truân",
    description:
      "Nạn dã. Gian lao. Yếu đuối, chưa đủ sức, ngần ngại, do dự, vất vả, phải nhờ sự giúp đỡ. Tiền hung hậu kiết chi tượng: trước dữ sau lành.",
    meaning:
      "Quẻ Hung. Truân trong gian truân. Quẻ mang ý nghĩa mọi thứ gian khó, vất vả. Làm gì cũng mất công mất sức, ngần ngại, do dự. Tuy rồi cũng sẽ đến được đích nhưng sẽ mất công sức hơn người khác",
    rate: "Hung", rank: "C",
  },
  {
    no: 4,
    code: "010001",
    name: "Mông",
    description:
      "Muội dã. Bất minh. Tối tăm, mờ ám, không minh bạch, che lấp, bao trùm, phủ chụp, ngu dại, ngờ nghệch. Thiên võng tứ trương chi tượng: tượng lưới trời giăng bốn mặt",
    meaning:
      "Quẻ Đại Hung. Mông trong mông muội. Quẻ mang ý nghĩa mọi sự tối tăm, mờ ám. Người sở hữu quẻ này tất không tránh được cảm giác mông lung, lạc lối trong công việc, kết hợp thêm nhiều yếu tố xấu thì bế tắc, bị thao túng. Rất cần ánh sáng dẫn lối.",
    rate: "Đại Hung", rank: "D",
  },
  {
    no: 5,
    code: "111010",
    name: "Nhu",
    description:
      "Thuận dã. Tương hội. Chờ đợi vì hiểm đằng trước, thuận theo, quây quần, tụ hội, vui hội, cứu xét, chầu về. Quân tử hoan hội chi tượng: quân tử vui vẻ hội họp, ăn uống chờ thời.",
    meaning:
      "Quẻ Cát. Nhu có nghĩa là an yên chờ đợi. Là lời dạy muốn tránh được nguy hiểm, tội vạ hãy kiên nhẫn. Quẻ lợi cho việc an dưỡng, nghỉ ngơi, không lợi cầu công danh, tiền tài.",
    rate: "Cát", rank: "A",
  },
  {
    no: 6,
    code: "010111",
    name: "Tụng",
    description:
      "Luận dã. Bất hòa. Bàn cãi, kiện tụng, bàn tính, cãi vã, tranh luận, bàn luận. Đại tiểu bất hòa chi tượng: lớn nhỏ không hòa.",
    meaning:
      "Quẻ Hung. Tụng trong kiện tụng. Quẻ này mang đến cho người chủ những bất hoà tranh cãi, xấu hơn nữa thì dính líu đến tố tụng, pháp luật.",
    rate: "Hung", rank: "C",
  },
  {
    no: 7,
    code: "010000",
    name: "Sư",
    description:
      "Chúng dã. Chúng trợ. Đông chúng, vừa làm thầy, vừa làm bạn, học hỏi lẫn nhau, nắm tay nhau qua truông, nâng đỡ. Sĩ chúng ủng tòng chi tượng: tượng quần chúng ủng hộ nhau.",
    meaning:
      "Quẻ cát, Sư tượng trưng cho chiến tranh, quyền uy, quân đội, giúp nâng cao địa vị, chức tước. Nếu biết tận dụng luồng sinh khí của quẻ này thì công danh sự nghiệp sẽ cực thịnh.",
    rate: "Cát", rank: "A",
  },
  {
    no: 8,
    code: "000010",
    name: "Tỷ",
    description:
      "Tư dã. Chọn lọc. Thân liền, gạn lọc, mật thiết, tư hữu riêng, trưởng đoàn, trưởng toán, chọn lựa. Khứ xàm nhiệm hiền chi tượng: bỏ nịnh dụng trung.",
    meaning:
      "Quẻ cát, Tỷ thể hiện sự gần gũi liên lạc, giúp đỡ lẫn nhau, dễ mang đến cho người dụng quẻ sự thành công, hài lòng, thoả mãn.",
    rate: "Cát Hung lẫn lộn", rank: "B",
  },
  {
    no: 9,
    code: "111011",
    name: "Tiểu súc",
    description:
      "Tắc dã. Dị đồng. Lúc bế tắc, không đồng ý nhau, cô quả, súc oán, chứa mọi oán giận, có ý trái lại, không hòa hợp, nhỏ nhen. Cầm sắt bất điệu chi tượng: tiếng đàn không hòa điệu.",
    meaning:
      "Quẻ Hung. Tiểu Súc đại diện cho sự bế tắc, bất đồng quan điểm. Người dụng quẻ này làm gì cũng dễ dẫn đến sự oán giận, toan tính nhỏ nhen, khó thành được việc lớn. Cực bất lợi cho các công việc cần hoạt động nhóm, đoàn thể.",
    rate: "Đại Hung", rank: "D",
  },
  {
    no: 10,
    code: "110111",
    name: "Lý",
    description:
      "Lễ dã. Lộ hành. Nghi lễ, có chừng mực, khuôn phép, dẫm lên, không cho đi sai, có ý chặn đường thái quá, hệ thống, pháp lý. Hổ lang đang đạo chi tượng: tượng hổ lang đón đường.",
    meaning:
      "Quẻ cát, Lý có nghĩa là lý lẽ, phép tắc. Quẻ mang ý nghĩa của sự nghiêm túc, khuôn phép, lễ nghĩa. Là lời dạy trước những hiểm nguy, rối ren, rắc rối bủa vây nếu có thái độ nhẹ nhàng, nhún nhường, làm đúng theo những nguyên tắc, đạo lý thì tức khắc mọi điều sẽ trở nên tốt đẹp. Quẻ này bất lợi với những người cần sự sáng tạo, phá bỏ khuôn phép, nghệ sĩ.",
    rate: "Cát Hung lẫn lộn", rank: "B",
  },
  {
    no: 11,
    code: "111000",
    name: "Thái",
    description:
      "Thông dã. Điều hòa. Thông hiểu, am tường, hiểu biết, thông suốt, quen biết, quen thuộc. Thiên địa hòa xướng chi tượng: tượng trời đất giao hòa.",
    meaning:
      "Quẻ cát hanh, Thái trong quốc thái dân an. Quẻ biểu tượng cho sự bình yên, thái bình, hòa hợp, tiên đoán mọi điều hanh thông, lớn mạnh, phát triển không ngừng. Trên dưới hoà thuận, âm dương hoà hợp. Tốt mọi mặt.",
    rate: "Đại Cát", rank: "S",
  },
  {
    no: 12,
    code: "000111",
    name: "Bĩ",
    description:
      "Tắc dã. Gián cách. Bế tắc, không thông, không tương cảm nhau, xui xẻo, dèm pha, chê bai lẫn nhau, mạnh ai nấy theo ý riêng. Thượng hạ tiếm loạn chi tượng: trên dưới lôi thôi.",
    meaning:
      "Quẻ Đại Hung. Bĩ trong bĩ cực. Quẻ biểu tượng cho sự bế tắc, cùng đường. Người sở hữu quẻ này hay dính xui xẻo, dèm pha, thất bại. Làm việc hội nhóm thì dẫm chân nhau, mạnh ai người ấy làm, trên dưới không đồng lòng.",
    rate: "Đại Hung", rank: "D",
  },
  {
    no: 13,
    code: "101111",
    name: "Đồng Nhân",
    description:
      "Thân dã. Thân thiện. Trên dưới cùng lòng, cùng người ưa thích, cùng một bọn người. Hiệp lực đồng tâm chi tượng: tượng cùng người hiệp lực.",
    meaning:
      "Quẻ cát, Đồng Nhân là cùng với người. Quẻ tượng trưng cho sự đoàn kết trên dưới, ý thức được quyền lợi của mọi người, hợp tác giúp đỡ để thành công.",
    rate: "Cát", rank: "A",
  },
  {
    no: 14,
    code: "111101",
    name: "Đại Hữu",
    description:
      "Khoan dã. Cả có. Thong dong, dung dưỡng nhiều, độ lượng rộng, có đức dầy, chiếu sáng lớn. Kim ngọc mãn đường chi tượng: vàng bạc đầy nhà, sở hữu tài sản vật chất và tinh thần ở mức cao nhất.",
    meaning:
      "Quẻ đại cát, Đại Hữu là sự văn minh, sáng sủa, mạnh mẽ và giàu có. Nếu có sự nhất tâm đồng trí, cương nhu khéo léo thì sẽ giữ được phú quý giàu mạnh lâu bền.",
    rate: "Đại Cát", rank: "S",
  },
  {
    no: 15,
    code: "001000",
    name: "Khiêm",
    description:
      "Thoái dã. Cáo thoái. Khiêm tốn, nhún nhường, khiêm từ, cáo thoái, từ giã, lui vào trong, giữ gìn, nhốt vào trong, đóng cửa. Thượng hạ mông lung chi tượng: tượng trên dưới hoang mang.",
    meaning:
      "Quẻ cát, Khiêm trong khiêm nhường. Quẻ thể hiện triết lý đạo đức thực tế rõ ràng, lúc cực thịnh thì nên khiêm tốn để hạn chế sự đố kỵ. Càng khiêm tốn thì vận số càng được thịnh vượng.",
    rate: "Cát", rank: "A",
  },
  {
    no: 16,
    code: "000100",
    name: "Dự",
    description:
      "Duyệt dã. Thuận động. Dự bị, dự phòng, canh chừng, sớm, vui vầy. Thượng hạ duyệt dịch chi tượng: tượng trên dưới vui vẻ.",
    meaning:
      "Quẻ lợi, Dự mang đến điềm cát lành, thu được lòng tin tưởng, có niềm vui trong đời sống cũng như trong sự nghiệp. Trên bảo dưới nghe, mọi người đều được lợi.",
    rate: "Cát", rank: "A",
  },
  {
    no: 17,
    code: "100110",
    name: "Tuỳ",
    description:
      "Thuận dã. Di động. Cùng theo, mặc lòng, không có chí hướng, chỉ chiều theo, đại thể chủ việc di động, thuyên chuyển như chiếc xe. Phản phúc bất định chi tượng: loại không ở cố định bao giờ.",
    meaning:
      "Quẻ Hung. Tuỳ mang ý nghĩa của sự bị động, thuận theo. Người sở hữu quẻ này sẽ mang cảm giác bị khống chế, theo sự chỉ dẫn, điều khiển của người khác, dù lòng không cùng chí hướng. Quẻ bất lợi cho việc làm chủ.",
    rate: "Hung", rank: "C",
  },
  {
    no: 18,
    code: "011001",
    name: "Cổ",
    description:
      "Sự dã. Sự biến. Có sự không yên trong lòng, làm ngờ vực, khua, đánh, mua chuốc lấy cái hại, đánh trống, làm cho sợ sệt, sửa lại cái lỗi trước đã làm. Âm hại tương liên chi tượng: điều hại cùng có liên hệ.",
    meaning:
      "Quẻ Hung. Cổ có ý nghĩa biến cố, bất an. Người chủ của quẻ này thường bị tâm bất an, ngờ vực, thiếu tin tưởng, sợ sệt.",
    rate: "Hung", rank: "C",
  },
  {
    no: 19,
    code: "110000",
    name: "Lâm",
    description:
      "Đại dã. Bao quản. Việc lớn, người lớn, cha nuôi, vú nuôi, giáo học, nhà sư, kẻ cả, dạy dân, nhà thầu. Quân tử dĩ giáo tư chi tượng: người quân tử dạy dân, che chở, bảo bọc cho dân vô bờ bến. Nhưng Lâm còn có nghĩa nữa là tới (như lâm chung là tới lúc cuối cùng, tới lúc chết; hoặc lâm hạ: người trên tới người dưới).",
    meaning:
      "Quẻ Lợi. Lâm có nghĩa là bao quản, việc lớn. Lợi công việc quản lý, cai quản, giáo dục dạy học, đỡ đầu, bảo vệ.",
    rate: "Cát Hung lẫn lộn", rank: "B",
  },
  {
    no: 20,
    code: "000011",
    name: "Quan",
    description:
      "Quan dã. Quan sát. Xem xét, trông coi, cảnh tượng xem thấy, thanh tra, lướt qua, sơ qua, sơn phết, quét nhà. Vân bình tụ tán chi tượng: tượng bèo mây tan hợp.",
    meaning:
      "Quẻ Lợi. Quan là quan sát, xem xét. Lợi cho việc giám sát, kiểm tra, thanh tra. Hàm ý kiên nhẫn quan sát tìm cơ hội, như con hổ ngắm chọn con mồi, chưa đến lúc ra tay.",
    rate: "Cát Hung lẫn lộn", rank: "B",
  },
  {
    no: 21,
    code: "100101",
    name: "Phệ Hạp",
    description:
      "Hình ngục. Khiết dã. Cấn hợp. Cẩu hợp, bấu víu, bấu quào, dày xéo, đay nghiến, phỏng vấn, hỏi han (học hỏi). Ủy mị bất chấn chi tượng: tượng yếu đuối không chạy được.",
    meaning:
      "Quẻ Cát Hung lẫn lộn. Phệ hạp là cắn xé, hình ngục. Người sở hữu quẻ này làm việc về hành pháp, pháp luật thì Cát, bổ sung thêm cái uy dũng. Nếu không là Hung, tất dễ dính tranh cãi pháp luật, xấu thì hình ngục.",
    rate: "Hung", rank: "C",
  },
  {
    no: 22,
    code: "101001",
    name: "Bí",
    description:
      "Sức dã. Quang minh. Trang sức, sửa sang, trang điểm, thấu suốt, rõ ràng. Quang minh thông đạt chi tượng: quang minh, sáng sủa, thấu suốt",
    meaning:
      "Quẻ cát, Bí có nghĩa là quang minh, sáng sủa. Quẻ mang khuynh hướng của cuộc sống văn minh, hưởng thụ, biểu tượng cho sắc đẹp bên ngoài, trang trí lịch sự hoặc màu sắc tao nhã. Quẻ này cầu Danh là đại cát",
    rate: "Cát", rank: "A",
  },
  {
    no: 23,
    code: "000001",
    name: "Bác",
    description:
      "Lạc dã. Tiêu điều. Đẽo gọt, lột cướp đi, không có lợi, rụng rớt, đến rồi lại đi, tản lạc, lạt lẽo nhau, xa lìa nhau, hoang vắng, buồn thảm. Lục thân băng thán chi tượng: tượng bà con thân thích xa lìa nhau.",
    meaning:
      "Quẻ Hung. Bác mang ý nghĩa của sự cô đơn, tiêu điều, gọt bỏ. Người chủ sở hữu quẻ tất hay gặp sự chia ly, lìa xa, hoang vắng, buồn tẻ. Không lợi cho người thân, họ hàng.",
    rate: "Đại Hung", rank: "D",
  },
  {
    no: 24,
    code: "100000",
    name: "Phục",
    description:
      "Phản dã. Tái hồi. Lại có, trở về, bên ngoài, phản phục. Sơn ngoại thanh sơn chi tượng: tượng ngoài núi lại còn có núi nữa.",
    meaning:
      "Quẻ Lợi. Phục là phục hồi, phản công. Quẻ lợi cho việc khôi phục, xây dựng lại, phản công, chiếm lại. Trước bại sau thành. Lợi cho hậu vận.",
    rate: "Cát Hung lẫn lộn", rank: "B",
  },
  {
    no: 25,
    code: "100111",
    name: "Vô Vọng",
    description:
      "Thiên tai dã. Xâm lấn. Tai vạ, lỗi bậy bạ, không lề lối, không quy củ, càn đại, chống đối, hứng chịu. Cương tự ngoại lai chi tượng: tượng kẻ mạnh từ ngoài đến.",
    meaning:
      "Quẻ Đại Hung. Vô Vọng mang ý nghĩa tai hoạ, tội lỗi, thiên tai. Người chủ sở hữu quẻ dễ dính tai vạ, sự không lề lối, thiếu quy củ, chống đối. Xấu mọi mặt.",
    rate: "Đại Hung", rank: "D",
  },
  {
    no: 26,
    code: "111001",
    name: "Đại súc",
    description:
      "Tụ dã. Tích tụ. Chứa tụ, súc tích, lắng tụ một chỗ, dự trữ, đựng, để dành. Đồng loại hoan hội chi tượng: đồng loại hội họp vui vẻ, cục bộ.",
    meaning:
      "Quẻ cát, Đại súc là tích tụ, nhóm lại, dự trữ. Quẻ báo hiệu thời vận đang đến, bắt đầu hanh thông, có sự bảo hộ của cấp trên, thành công trong công danh sự nghiệp, không ngừng được nâng chức, thăng tiến. Tuy nhiên Quẻ bất lợi cho những người thích sự tự do, phóng khoáng, không trói buộc.",
    rate: "Cát", rank: "A",
  },
  {
    no: 27,
    code: "100001",
    name: "Di",
    description:
      "Dưỡng dã. Dung dưỡng. Chăm lo, tu bổ, thêm, ăn uống, bổ dưỡng, bồi dưỡng, ví như trời nuôi muôn vật, thánh nhân nuôi người. Phi long nhập uyên chi tượng: rồng vào vực nghỉ ngơi.",
    meaning:
      "Quẻ cát, Di là nuôi dưỡng, bồi dưỡng, tu bổ. Quẻ mang điềm báo đường quan lộc hanh thông, những mong muốn phát triển sự nghiệp địa vị đều thuận lợi.",
    rate: "Cát", rank: "A",
  },
  {
    no: 28,
    code: "011110",
    name: "Đại Quá",
    description:
      "Họa dã. Cả quá. Cả quá ắt tai họa, quá mực thường, quá nhiều, giàu cương nghị ở trong. Nộn thảo kinh sương chi tượng: tượng cỏ non bị sương tuyết.",
    meaning:
      "Quẻ Lợi, Đại Quá là lớn lao. Quẻ thể hiện một tình thế vững vàng, mặc dù trước mắt có nhiều gian nan trắc trở nhưng với tinh thần quyết tâm thì mọi việc sẽ đạt được thành công như ý. Nhưng cần chú ý dù hơn người vẫn nên khiêm nhường, vì lý lẽ thịnh quá tất suy.",
    rate: "Cát", rank: "A",
  },
  {
    no: 29,
    code: "010010",
    name: "Thuần Khảm",
    description:
      "Hãm dã. Hãm hiểm. Hãm vào ở trong, xuyên sâu vào trong, đóng cửa lại, gập ghềnh, trắc trở, bắt buộc, kìm hãm, thắng. Khổ tận cam lai chi tượng: tượng hết khổ mới đến sướng.",
    meaning:
      "Quẻ Hung. Khảm là chốn nước sâu thâm hiểm. Điềm báo của sự hiểm nguy, chướng ngại, trắc trở. Người sở hữu quẻ này tất mọi sự gặp bế tắc, kìm hãm. Phải rất vất vả mới đạt được kết quả.",
    rate: "Đại Hung", rank: "D",
  },
  {
    no: 30,
    code: "101101",
    name: "Thuần Ly",
    description:
      "Lệ dã. Sáng chói. Sáng sủa, trống trải, trống trơn, tỏa ra, bám vào, phụ bám, phô trương ra ngoài. Môn hộ bất ninh chi tượng: tượng nhà cửa không yên.Ly còn nghĩa thứ nhì là sáng: nét ở giữa dứt, tức là ở giữa rỗng, rỗng thì sáng. Lửa sáng, mặt trời sáng, cho nên Ly có có tượng là lửa, là mặt trời. Sau cùng Ly còn có nghĩa là rời ra, như chia Ly",
    meaning:
      "Quẻ hanh, Ly là ngọn lửa. Quẻ tượng trưng cho sự may mắn, thành công, nổi bật. Lợi nhất cho việc cầu danh tiếng, sắc đẹp, sự chú ý.",
    rate: "Cát", rank: "A",
  },
  {
    no: 31,
    code: "001110",
    name: "Hàm",
    description:
      "Cảm dã. Thụ cảm. Cảm xúc, thọ nhận, cảm ứng, nghĩ đến, nghe thấy, xúc động. Nam nữ giao cảm chi tượng: tượng nam nữ có tình ý, tình yêu.",
    meaning:
      " Quẻ cát, Hàm trong hàm ý. Quẻ thể hiện cho sự hợp tác, hiểu ý, hưởng ứng thông suốt, mọi việc được thành công như ý. Lợi cho việc phát triển tình cảm. ",
    rate: "Cát", rank: "A",
  },
  {
    no: 32,
    code: "011100",
    name: "Hằng",
    description:
      "Cửu dã. Trường cửu. Lâu dài, chậm chạp, đạo lâu bền như vợ chồng, kéo dài câu chuyện, thâm giao, nghĩa cố tri, xưa, cũ",
    meaning:
      "Quẻ cát, Hằng trong vĩnh hằng. Quẻ thể hiện đạo trung thành, sự lâu dài, bền vững, lý tưởng hoặc quy luật nhất định.Trong sự nghiệp, nếu trung với chính nghĩa, chính sách nhân đạo thì tài lộc sẽ được bền vững, vị trí được nâng cao.",
    rate: "Cát", rank: "A",
  },
  {
    no: 33,
    code: "001111",
    name: "Độn",
    description:
      "Thoái dã. Ẩn trá. Lui, ẩn khuất, tránh đời, lừa dối, trá hình, có ý trốn tránh, trốn cái mặt thấy cái lưng. Báo ẩn nam sơn chi tượng: tượng con báo ẩn ở núi nam.",
    meaning:
      "Quẻ Cát Hung lẫn lộn. Độn là trốn tránh, ẩn náu, trá hình, lừa dối. Cát Lợi nếu dùng vào việc ẩn cư, nghỉ ngơi, yên dưỡng. Nếu cầu danh, cầu tài sẽ gặp thất bại, sụp đổ.",
    rate: "Hung", rank: "C",
  },
  {
    no: 34,
    code: "111100",
    name: "Đại Tráng",
    description:
      "Chí dã. Tự cường. Ý chí riêng, bụng nghĩ, hướng thượng, ý định, vượng sức, thịnh đại, trên cao, chót vót, lên trên, chí khí, có lập trường. Phượng tập đăng sơn chi tượng: tượng phượng đậu trên núi.",
    meaning:
      "Quẻ cát, Đại Tráng là ý chí lớn lao. Quẻ báo hiệu vận số thịnh vượng và phát triển lớn. Người dụng quẻ tất được ý chí kiên cường, sức mạnh để vượt qua mọi chướng ngại.",
    rate: "Cát", rank: "A",
  },
  {
    no: 35,
    code: "000101",
    name: "Tấn",
    description:
      "Tiến dã. Hiển hiện. Đi hoặc tới, tiến tới gần, theo mực thường, lửa đã hiện trên đất, trưng bày. Long kiến trình tường chi tượng: tượng rồng hiện điềm lành",
    meaning:
      "Quẻ cát, Tấn trong tấn tới, tấn công. Quẻ báo hiệu nguy hiểm đã hết, cuộc đời mở ra với bao điều sáng sủa, văn minh đang ở phía trước.",
    rate: "Cát", rank: "A",
  },
  {
    no: 36,
    code: "101000",
    name: "Minh Di",
    description:
      "Thương dã. Hại đau. Thương tích, bệnh hoạn, buồn lo, đau lòng, ánh sáng bị tổn thương. Kinh cức mãn đồ chi tượng: gai góc đầy đường.",
    meaning:
      "Quẻ Hung. Quẻ mang ý nghĩa ánh sáng bị vùi lấp, có tài mà không được trọng dùng, không gặp thời. Rất bất lợi cho việc cầu danh, cầu tài.",
    rate: "Đại Hung", rank: "D",
  },
  {
    no: 37,
    code: "101011",
    name: "Gia Nhân",
    description:
      "Đồng dã. Nảy nở. Người nhà, gia đinh, cùng gia đình, đồng chủng, đồng nghiệp, cùng xóm, sinh sôi, khai thác mở mang thêm. Khai hoa kết tử chi tượng: trổ bông sinh trái, nẩy mầm.",
    meaning:
      "Quẻ cát, Gia Nhân nghĩa là người trong gia đình. Thể hiện ý nghĩa gia đình hòa thuận, đường con cái được như ý. Lợi cho việc quan hệ người với người.",
    rate: "Cát", rank: "A",
  },
  {
    no: 38,
    code: "110101",
    name: "Khuê",
    description:
      "Quai dã. Hỗ trợ. Trái lìa, lìa xa, hai bên lợi dụng lẫn nhau, cơ biến quai xảo, như cung tên. Hồ giả hổ oai chi tượng: con hồ (cáo) nhờ oai con hổ.",
    meaning:
      "Quẻ Hung. Khuê mang ý nghĩa lìa xa, nghịch ý, lợi dụng lẫn nhau. Người sử dụng quẻ này không lợi để làm chủ, chỉ có thể cáo mượn oai hùm.",
    rate: "Hung", rank: "C",
  },
  {
    no: 39,
    code: "001010",
    name: "Kiển",
    description:
      "Nạn dã. Trở ngại. Cản ngăn, chặn lại, chậm chạp, què, khó khăn. Bất năng tiến giả chi tượng: không năng đi.",
    meaning:
      "Quẻ Hung. Kiển mang ý nghĩa tai nạn, trở ngại. Người dùng quẻ này hay gặp sự cản ngăn, kìm hãm, khó khăn. Đi lại di chuyển dễ gặp tai nạn. Bất lợi mọi mặt.",
    rate: "Đại Hung", rank: "D",
  },
  {
    no: 40,
    code: "010100",
    name: "Giải",
    description:
      "Tán dã. Nơi nơi. Làm cho tan đi, như làm tan sự nguy hiểm, giải phóng, giải tán, loan truyền, tuyên truyền, phân phát, lưu thông, ban rải, ân xá. Lôi vũ tác giải chi tượng: tượng sấm động mưa bay.",
    meaning:
      "Quẻ cát, Giải nghĩa là hoá giải, báo hiệu những khó khăn sẽ sớm được khắc phục, giải quyết, mở ra một thời kỳ mới cho người dụng quẻ đó là cuộc sống dễ dàng, thoải mái hơn, đồng thời thể hiện tinh thần vượt qua khó khăn mạnh mẽ.",
    rate: "Cát", rank: "A",
  },
  {
    no: 41,
    code: "110001",
    name: "Tổn",
    description:
      "Thất dã. Tổn hại. Hao mất, thua thiệt, bớt kém, bớt phần dưới cho phần trên là tổn hại. Phòng nhân ám toán chi tượng: tượng đề phòng sự ngầm hại, hao tổn.",
    meaning:
      "Quẻ Hung. Tổn là tổn hao, thiệt hại. Người sử dụng quẻ này thì hay gặp sự thua thiệt, không công bằng, hy sinh. Làm ăn thì gặp sự phá hoại, hao tổn.",
    rate: "Đại Hung", rank: "D",
  },
  {
    no: 42,
    code: "100011",
    name: "Ích",
    description:
      "Ích lợi. Tiến ích. Thêm được lợi, giúp dùm, tiếng dội xa, vượt lên, phóng mình tới. Hồng hộc xung tiêu chi tượng: chim hồng, chim hộc bay qua mây mù.",
    meaning:
      "Quẻ cát. Ích có nghĩa là lợi ích, ích lợi cho bản thân. Điềm báo thể hiện cho công danh sự nghiệp được mở rộng, được quý nhân phù trợ nên mọi việc khó khăn trở ngại đều có thể vượt qua.",
    rate: "Cát", rank: "A",
  },
  {
    no: 43,
    code: "111110",
    name: "Quải",
    description:
      "Quyết dã. Dứt khoát. Dứt hết, biên cương, ranh giới, thành phần, thành khoảnh, quyết định, quyết nghị, cổ phần, thôi, khai lề lối. Ích chi cực tắc quyết chi tượng: lợi đã cùng ắt thôi.",
    meaning:
      "Quẻ Cát Hung lẫn lộn. Quải nghĩa là quyết liệt, dứt khoát, kiểm soát. Nếu dùng cho việc quản lý, giám sát thì Cát. Nếu dùng cho việc quan hệ, tình cảm thì bất lợi.",
    rate: "Cát Hung lẫn lộn", rank: "B",
  },
  {
    no: 44,
    code: "011111",
    name: "Cấu",
    description:
      "Ngộ dã. Tương ngộ. Gặp gỡ, cấu kết, liên kết, kết hợp, móc nối, mềm gặp cứng. Phong vân bất trắc chi tượng: gặp gỡ thình lình, ít khi.",
    meaning:
      "Quẻ Cát Hung lẫn lộn. Cấu nghĩa là gặp gỡ, kết hợp, liên kết nhanh chóng. Nếu dùng quẻ này cho việc nhanh chóng, xử lý lập tức thì có thể được. Nếu cầu việc lâu dài, bền vững thì Hung. Không lợi cho việc tình cảm",
    rate: "Hung", rank: "C",
  },
  {
    no: 45,
    code: "000110",
    name: "Tuỵ",
    description:
      "Tụ dã. Trưng tập. Nhóm họp, biểu tình, dồn đống, quần tụ nhau lại, kéo đến, kéo thành bầy. Long vân tế hội chi tượng: tượng rồng mây giao hội.",
    meaning:
      "Quẻ Lợi. Mang hàm nghĩa hội nhóm, tập hợp. Quẻ lợi cho các công việc đoàn thể, quần chúng, gom lại, hội tụ tất được thịnh vượng.",
    rate: "Cát", rank: "A",
  },
  {
    no: 46,
    code: "011000",
    name: "Thăng",
    description:
      "Tiến dã. Tiến thủ. Thăng tiến, trực chỉ, tiến mau, bay lên, vọt tới trước, bay lên không trung, thăng chức, thăng hà. Phù giao trực thượng chi tượng: chà đạp để ngoi lên trên.",
    meaning:
      "Quẻ cát hanh, Thăng tượng trưng cho sự mọc lên, tiến bộ, tiến tới, báo hiệu thời vận nâng cao địa vị, tốt nhất cho thăng quan tiến chức. Tuy nhiên người dụng quẻ phải biết thời điểm để dừng lại, vì thăng rồi bao giờ cũng sẽ giáng, dừng lại đúng lúc sẽ mang lại sự cân bằng trong cuộc sống.",
    rate: "Đại Cát", rank: "S",
  },
  {
    no: 47,
    code: "010110",
    name: "Khốn",
    description:
      "Nguy dã. Nguy lo. Cùng quẫn, bị người làm ác, lo lắng, cùng khổ, mệt mỏi, nguy cấp, lo hiểm nạn. Thủ kỷ đãi thời chi tượng: tượng giữ mình đợi thời.",
    meaning:
      "Quẻ Hung. Khốn là khốn cùng, nguy hiểm. Người gặp quẻ này tất hay gặp chuyển nguy cấp cùng khổ, tai nạn. Xấu mọi mặt",
    rate: "Đại Hung", rank: "D",
  },
  {
    no: 48,
    code: "011010",
    name: "Tỉnh",
    description:
      "Tịnh dã. Trầm lặng. Ở chỗ nào cứ ở yên chỗ đó, xuống sâu, vực thẳm có nước, dưới sâu, cái giếng. Càn Khôn sát phối chi tượng: Trời Đất phối hợp lại.",
    meaning:
      "Quẻ Lợi. Tỉnh mang hàm ý Tĩnh lặng, trầm ổn. Lợi cho việc cố vấn, tư vấn, trợ lý hay nghỉ ngơi, tĩnh dưỡng. Không lợi việc cầu danh, cầu tài, phát triển, lớn lên.",
    rate: "Cát Hung lẫn lộn", rank: "B",
  },
  {
    no: 49,
    code: "101110",
    name: "Cách",
    description:
      "Cải dã. Cải biến. Bỏ lối cũ, cải cách, hoán cải, cách tuyệt, cánh chim thay lông. Thiên uyên huyền cách chi tượng: tượng vực trời xa thẳm.",
    meaning:
      "Quẻ cát, Cách trong cải cách. Quẻ mang đến thành công tốt đẹp, không gây ra những xáo trộn, đại diện cho cuộc cách mạng, thay đổi nhân sinh quan bằng những điều tiến bộ hơn. Lợi cho việc thay đổi.",
    rate: "Cát", rank: "A",
  },
  {
    no: 50,
    code: "011101",
    name: "Đỉnh",
    description:
      "Định dã. Nung đúc. Đứng được, chậm đứng, trồng, nung nấu, rèn luyện, vững chắc, ước hẹn. Luyện dược thành đơn chi tượng: tượng luyện thuốc thành linh đan, có rèn luyện mới nên người. Kết hợp quẻ này vào cung vợ chồng là tốt, con cái mạnh khoẻ, gia đình yên ấm bền lâu.",
    meaning:
      "Quẻ Cát. Đỉnh là chắc chắn, vững vàng. Người được quẻ này thì được hưởng sự ổn định. Vợ chồng hoà thuận, con cái khoẻ mạnh, gia đình yên ấm bền lâu, công việc ít biến động.",
    rate: "Đại Cát", rank: "S",
  },
  {
    no: 51,
    code: "100100",
    name: "Thuần Chấn",
    description:
      "Động dã. Động dụng. Rung động, sợ hãi do chấn động, phấn phát, nổ vang, phấn khởi, chấn kinh. Trùng trùng chấn kinh chi tượng: khắp cùng dấy động.",
    meaning:
      "Quẻ Cát Hung lẫn lộn. Chấn là chấn động. Nếu cầu yên bình thì Hung, ắt bị sợ hãi, rối loạn. Nếu cầu biến loạn, thay đổi, đột phá thì Cát, ắt được phấn khởi, gây tiếng vang lớn.",
    rate: "Cát Hung lẫn lộn", rank: "B",
  },
  {
    no: 52,
    code: "001001",
    name: "Thuần Cấn",
    description:
      "Chỉ dã. Ngưng nghỉ. Ngăn giữ, ở, thôi, dừng lại, đậy lại, gói ghém, ngăn cấm, vừa đúng chỗ. Thủ cựu đợi thời chi tượng: giữ mức cũ đợi thời.",
    meaning:
      "Quẻ Hung. Cấn là hình tượng núi kề núi. Điềm báo cho sự ngăn trở, níu giữ, dừng lại. Nếu cầu thăng tiến, phát triển thì không được như ý, phải nằm yên đợi thời.",
    rate: "Hung", rank: "C",
  },
  {
    no: 53,
    code: "001011",
    name: "Tiệm",
    description:
      "Tiến dã. Tuần tự. Từ từ, thong thả đến, lần lần, bò tới, chậm chạp, nhai nhỏ nuốt vào. Phúc lộc đồng lâm chi tượng: phúc lộc cùng đến.",
    meaning:
      "Quẻ cát, Tiệm trong tiệm cận. Quẻ thể hiện sự chuyển động từ từ tới thời vận tốt, không nên hấp tấp mà tiến, phải đặt kế hoạch tiến từng bước vững chắc mới được thành quả ưng ý",
    rate: "Cát", rank: "A",
  },
  {
    no: 54,
    code: "110100",
    name: "Quy Muội",
    description:
      "Tai dã. Xôn xao. Tai nạn, rối ren, lôi thôi, nữ chi chung, gái lấy chồng. Ác quỷ vi sủng chi tượng: tượng ma quái làm rối.",
    meaning:
      "Quẻ Hung. Quy Muội là xôn xao, rối ren lôi thôi. Người được quẻ này thì ắt sẽ hay dính phải việc vụn vặt, lôi thôi tiểu tiết.",
    rate: "Đại Hung", rank: "D",
  },
  {
    no: 55,
    code: "101100",
    name: "Phong",
    description:
      "Thịnh dã. Hòa mỹ. Thịnh đại, được mùa, nhiều người góp sức. Chí đồng đạo hợp chi tượng: tượng cùng đồng tâm hiệp lực.",
    meaning:
      "Quẻ cát hanh, Phong mang ý nghĩa thịnh đại, to lớn. Quẻ thể hiện sự sáng sủa, công danh sự nghiệp được hanh thông, tài lộc dồi dào.",
    rate: "Đại Cát", rank: "S",
  },
  {
    no: 56,
    code: "001101",
    name: "Lữ",
    description:
      "Khách dã. Thứ yếu. Đỗ nhờ, khách, ở đậu, tạm trú, kê vào, gá vào, ký ngụ bên ngoài, tính cách lang thang, ít người thân, không chính. Ỷ nhân tác giá chi tượng: nhờ người mai mối.",
    meaning:
      "Quẻ Hung. Lữ là hình ảnh của sự rời đi. Người được quẻ này e sẽ phải lang bạt, không ổn định, phải từ bỏ cái cũ.",
    rate: "Hung", rank: "C",
  },
  {
    no: 57,
    code: "011011",
    name: "Thuần Tốn",
    description:
      "Thuận dã. Thuận nhập. Theo lên theo xuống, theo tới theo lui, có sự giấu diếm ở trong. Âm dương thăng giáng chi tượng: khí âm dương lên xuống giao hợp.",
    meaning:
      "Quẻ Cát Hung lẫn lộn. Thuần Tốn đại diện cho hình ảnh gió chiều nào che chiều ấy, thiếu sự chủ động. Gió lên thì lên theo, gió xuống thì xuống theo. Nếu cầu việc làm chủ thì không được như ý. Cầu việc đi theo, phục tùng thì hợp.",
    rate: "Hung", rank: "C",
  },
  {
    no: 58,
    code: "110110",
    name: "Thuần Đoài",
    description:
      "Duyệt dã. Hiện đẹp. Đẹp đẽ, ưa thích, vui hiện trên mặt, không buồn chán, cười nói, khuyết mẻ. Hỉ dật mi tu chi tượng: tượng vui hiện trên mặt, khẩu khí.",
    meaning:
      "Quẻ cát hanh, Đoài thể hiện cho sự vui tươi, tốt đẹp đang được nhân đôi, báo hiệu con đường quan lộc rộng mở, tài lộc dồi dào.",
    rate: "Đại Cát", rank: "S",
  },
  {
    no: 59,
    code: "010011",
    name: "Hoán",
    description:
      "Tán dã. Ly tán. Lan ra tràn lan, tán thất, trốn đi xa, lánh xa, thất nhân tâm, hao bớt. Thủy ngộ phong tắc hoán tán chi tượng: tượng nước gặp gió thì phải tan, phải chạy.",
    meaning:
      "Quẻ hanh, Hoán tượng trưng cho sự thay đổi mang tính chất cải thiện. Quẻ cho thấy thời vận xấu, khó khăn hay rắc rối đang thì tan biến, mở ra một giai đoạn phát triển, mở rộng, bành trướng và đầy triển vọng.",
    rate: "Cát Hung lẫn lộn", rank: "B",
  },
  {
    no: 60,
    code: "110010",
    name: "Tiết",
    description:
      "Chỉ dã. Giảm chế. Ngăn ngừa, tiết độ, kiềm chế, giảm bớt, chừng mực, nhiều thì tràn. Trạch thượng hữu thủy chi tượng: trên đầm có nước.",
    meaning:
      "Quẻ Cát Hung lẫn lộn. Tiết là tiết chế, kiềm chế. Nếu cầu thăng tiến, gia tăng quan tước, lợi lộc thì Hung. Nếu cầu giảm bệnh tật, thói xấu thì Cát.",
    rate: "Cát Hung lẫn lộn", rank: "B",
  },
  {
    no: 61,
    code: "110011",
    name: "Trung Phu",
    description:
      "Tín dã. Trung thật. Tín thật, không ngờ vực, có uy tín cho người tin tưởng, tín ngưỡng, ở trong. Nhu tại nội nhi đắc trung chi tượng: tượng âm ở bên trong mà được giữa.",
    meaning:
      "Quẻ cát hanh, Trung Phu mang ý nghĩa sự trung thực, thật thà sẽ dẫn đến sự tín nhiệm, công danh sự nghiệp thăng tiến, tài lộc rộng mở. Quẻ lợi nhất trong việc dùng người.",
    rate: "Đại Cát", rank: "S",
  },
  {
    no: 62,
    code: "001100",
    name: "Tiểu Quá",
    description:
      "Quá dã. Bất túc. Thiểu lý, thiểu não, hèn mọn, nhỏ nhặt, bẩn thỉu, thiếu cường lực. Thượng hạ truân chuyên chi tượng: trên dưới gian nan, vất vả, buồn thảm.",
    meaning:
      "Quẻ Hung. Tiểu Quá đại diện cho sự hèn mọn, nhỏ nhặt, tiểu nhân. Người được quẻ này thì e không làm được việc lớn. Trên dưới gian nan, vất vả, thiếu cường lực.",
    rate: "Đại Hung", rank: "D",
  },
  {
    no: 63,
    code: "101010",
    name: "Ký Tế",
    description:
      "Hợp dã. Hiện hợp. Gặp nhau, cùng nhau, đã xong, việc xong, hiện thực, ích lợi nhỏ. Hanh tiểu giả chi tượng: việc nhỏ thì thành.",
    meaning:
      "Quẻ cát hanh, Ký Tế mang ý nghĩa hoàn thành, hơp tác cùng nhau, ích lợi. Tiên đoán người dụng quẻ sẽ được hưởng sự thành công, danh vọng, công việc làm ăn, sự nghiệp đang đi lên đỉnh cao.",
    rate: "Đại Cát", rank: "S",
  },
  {
    no: 64,
    code: "010101",
    name: "Vị Tế",
    description:
      "Thất dã. Thất cách. Thất bát, mất, thất bại, dở dang, chưa xong, nửa chừng. Ưu trung vọng hỷ chi tượng: tượng trong cái lo có cái mừng.",
    meaning:
      "Quẻ Hung. Vị Tế đại diện cho thất bại, dở dang. Người được quẻ này e mọi sự gặp lỡ dở nửa chừng.",
    rate: "Đại Hung", rank: "D",
  },
];

export default combineHexagramData;
