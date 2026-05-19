import { Question, Grade } from '../types';

export const baseQuestions: Question[] = [
  // ========================== LỚP 6 (50 CÂU DUY NHẤT) ==========================
  // --- Chủ đề: Số tự nhiên & Tập hợp ---
  { id: '6-1', grade: 6, difficulty: 'MEDIUM', text: 'Tập hợp A các số tự nhiên x sao cho 7 < x ≤ 11 và x là số nguyên tố là:', options: ['{11}', '{8; 9; 10; 11}', '{7; 11}', '{9; 11}'], correctAnswer: 0 },
  { id: '6-2', grade: 6, difficulty: 'MEDIUM', text: 'Số La Mã MMMCDXLIX tương ứng với số tự nhiên nào?', options: ['3449', '3649', '3469', '3444'], correctAnswer: 0 },
  { id: '6-3', grade: 6, difficulty: 'HARD', text: 'Kết quả của phép tính 2^5 . 5^2 - {250 : [450 - (4 . 5^3 - 2^2 . 25)]} là:', options: ['799', '800', '750', '801'], correctAnswer: 0 },
  { id: '6-4', grade: 6, difficulty: 'MEDIUM', text: 'Trong các số: 12345, 67890, 24681, 13578. Số nào vừa chia hết cho 2, 3, 5 và 9?', options: ['67890', '12345', '13578', 'Không có số nào'], correctAnswer: 0 },
  // --- Chủ đề: Lũy thừa ---
  { id: '6-5', grade: 6, difficulty: 'HARD', text: 'So sánh A = 2^300 và B = 3^200:', options: ['A < B', 'A > B', 'A = B', 'Không so sánh được'], correctAnswer: 0 },
  { id: '6-6', grade: 6, difficulty: 'HARD', text: 'Tìm chữ số tận cùng của biểu thức: 2^2024 + 3^2025', options: ['9', '7', '3', '1'], correctAnswer: 0 },
  // --- Chủ đề: Tính chất chia hết & Số nguyên tố ---
  { id: '6-7', grade: 6, difficulty: 'MEDIUM', text: 'Số các ước của số 360 là bao nhiêu?', options: ['24', '12', '18', '36'], correctAnswer: 0 },
  { id: '6-8', grade: 6, difficulty: 'HARD', text: 'Phân tích số 1260 ra thừa số nguyên tố ta được:', options: ['2^2 . 3^2 . 5 . 7', '2^2 . 3 . 5^2 . 7', '2 . 3^2 . 5 . 7', '2^3 . 3 . 5 . 7'], correctAnswer: 0 },
  { id: '6-9', grade: 6, difficulty: 'HARD', text: 'Tìm số tự nhiên n lớn nhất sao cho 120 chia hết cho n và 180 chia hết cho n, đồng thời 10 < n < 50.', options: ['30', '20', '40', '15'], correctAnswer: 0 },
  { id: '6-10', grade: 6, difficulty: 'HARD', text: 'Một số tự nhiên khi chia cho 12, 15, 18 đều dư 5. Tìm số nhỏ nhất có 3 chữ số thỏa mãn.', options: ['185', '190', '365', '175'], correctAnswer: 0 },
  // --- Chủ đề: Số nguyên ---
  { id: '6-11', grade: 6, difficulty: 'MEDIUM', text: 'Thực hiện phép tính: (-125) . 8 + (-25) . (-4) . 10', options: ['0', '-2000', '1000', '-1000'], correctAnswer: 0 },
  { id: '6-12', grade: 6, difficulty: 'HARD', text: 'Tính giá trị biểu thức: A = 1 - 2 + 3 - 4 + ... + 2023 - 2024', options: ['-1012', '1012', '0', '-2024'], correctAnswer: 0 },
  { id: '6-13', grade: 6, difficulty: 'MEDIUM', text: 'Tìm số nguyên x thỏa mãn: |x - 5| = 3', options: ['x = 8 hoặc x = 2', 'x = 8', 'x = 2', 'x = -8 hoặc x = -2'], correctAnswer: 0 },
  { id: '6-14', grade: 6, difficulty: 'HARD', text: 'Tìm tập hợp các số nguyên x sao cho (x + 3) chia hết cho (x + 1):', options: ['{-3; -2; 0; 1}', '{-1; 1}', '{0; 2}', '{-2; 0}'], correctAnswer: 0 },
  { id: '6-15', grade: 6, difficulty: 'HARD', text: 'Cho A = 1 + 2 + 2^2 + ... + 2^100. Chứng minh A + 1 là một lũy thừa của 2. Lũy thừa đó là:', options: ['2^101', '2^100', '2^99', '2^102'], correctAnswer: 0 },
  // --- Chủ đề: Hình học cơ bản ---
  { id: '6-16', grade: 6, difficulty: 'MEDIUM', text: 'Hình thoi có chu vi là 40cm. Độ dài một cạnh là:', options: ['10cm', '20cm', '5cm', '15cm'], correctAnswer: 0 },
  { id: '6-17', grade: 6, difficulty: 'MEDIUM', text: 'Hình thang cân có hai đáy lần lượt là 6cm, 10cm và chiều cao 4cm. Diện tích hình thang là:', options: ['32 cm²', '64 cm²', '16 cm²', '40 cm²'], correctAnswer: 0 },
  { id: '6-18', grade: 6, difficulty: 'HARD', text: 'Diện tích hình thoi có độ dài hai đường chéo là 12cm và 16cm. Chu vi của hình thoi đó là:', options: ['40 cm', '20 cm', '48 cm', '56 cm'], correctAnswer: 0 },
  { id: '6-19', grade: 6, difficulty: 'HARD', text: 'Một khu vườn hình bình hành có cạnh đáy là 25m. Nếu tăng cạnh đáy thêm 5m thì diện tích tăng thêm 40m². Diện tích ban đầu của khu vườn là:', options: ['200 m²', '125 m²', '150 m²', '250 m²'], correctAnswer: 0 },
  { id: '6-20', grade: 6, difficulty: 'HARD', text: 'Một hình vuông có chu vi bằng chu vi một hình chữ nhật có chiều dài 12cm và chiều rộng 8cm. Diện tích hình vuông là:', options: ['100 cm²', '40 cm²', '144 cm²', '64 cm²'], correctAnswer: 0 },
  // --- Chủ đề: Phân số & Số thập phân ---
  { id: '6-21', grade: 6, difficulty: 'MEDIUM', text: 'Thực hiện phép tính: 3/4 + 1/5 - 2/3', options: ['17/60', '13/60', '1/2', '19/60'], correctAnswer: 0 },
  { id: '6-22', grade: 6, difficulty: 'HARD', text: 'Tính giá trị biểu thức: B = (1/2 + 1) . (1/3 + 1) . (1/4 + 1) ... (1/99 + 1)', options: ['50', '100', '99', '50.5'], correctAnswer: 0 },
  { id: '6-23', grade: 6, difficulty: 'HARD', text: 'Tìm x biết: (x - 1/2) : 1/3 + 5/6 = 1', options: ['x = 5/9', 'x = 1/2', 'x = 4/9', 'x = 2/3'], correctAnswer: 0 },
  { id: '6-24', grade: 6, difficulty: 'HARD', text: 'Một quyển sách có 120 trang. Ngày đầu Lan đóng được 1/3 số trang, ngày thứ hai Lan đóng được 2/5 số trang còn lại. Số trang Lan chưa đóng là:', options: ['48 trang', '40 trang', '32 trang', '50 trang'], correctAnswer: 0 },
  { id: '6-25', grade: 6, difficulty: 'HARD', text: 'Chứng minh rằng phân số (2n+1)/(3n+2) là phân số tối giản với mọi n tự nhiên. Để chứng minh ta cần tìm ƯCLN của tử và mẫu. ƯCLN đó là:', options: ['1', 'n', '2', '3'], correctAnswer: 0 },
  // --- Các câu hỏi bổ sung cho đủ 50 ---
  { id: '6-26', grade: 6, difficulty: 'MEDIUM', text: 'Trên tia Ox lấy hai điểm A và B sao cho OA = 3cm, OB = 7cm. Gọi M là trung điểm của AB. Tính OM.', options: ['5cm', '4cm', '2cm', '3.5cm'], correctAnswer: 0 },
  { id: '6-27', grade: 6, difficulty: 'MEDIUM', text: 'Cho góc xOy = 120°. Vẽ tia phân giác Oz của góc xOy. Số đo góc xOz là:', options: ['60°', '120°', '30°', '90°'], correctAnswer: 0 },
  { id: '6-28', grade: 6, difficulty: 'HARD', text: 'Hình nào có 6 trục đối xứng?', options: ['Lục giác đều', 'Hình tròn', 'Hình vuông', 'Tam giác đều'], correctAnswer: 0 },
  { id: '6-29', grade: 6, difficulty: 'HARD', text: 'Tìm số tự nhiên nhỏ nhất có 9 ước.', options: ['36', '12', '16', '100'], correctAnswer: 0 },
  { id: '6-30', grade: 6, difficulty: 'HARD', text: 'Tìm x nguyên sao cho 2x + 1 là ước của 10.', options: ['x ∈ {0; -1; 2; -3}', 'x ∈ {1; 2; 5; 10}', 'x ∈ {0; 2}', 'x ∈ {-1; -3}'], correctAnswer: 0 },
  { id: '6-31', grade: 6, difficulty: 'MEDIUM', text: 'Ước chung của 12, 18 và 30 là:', options: ['{1; 2; 3; 6}', '{1; 2; 3}', '{6; 12}', '{1; 6}'], correctAnswer: 0 },
  { id: '6-32', grade: 6, difficulty: 'HARD', text: 'Số nguyên x thỏa mãn x + 15 = -10 là:', options: ['-25', '25', '-5', '5'], correctAnswer: 0 },
  { id: '6-33', grade: 6, difficulty: 'MEDIUM', text: 'Sắp xếp các số sau theo thứ tự tăng dần: -10, 5, 0, -2, 1', options: ['-10, -2, 0, 1, 5', '0, 1, -2, 5, -10', '-10, 5, 1, -2, 0', '5, 1, 0, -2, -10'], correctAnswer: 0 },
  { id: '6-34', grade: 6, difficulty: 'HARD', text: 'Giá trị biểu thức (-2)^3 . (-3)^2 - (-1)^2024 là:', options: ['-73', '71', '-71', '73'], correctAnswer: 0 },
  { id: '6-35', grade: 6, difficulty: 'HARD', text: 'Tìm n ∈ N sao cho n + 4 chia hết cho n + 1.', options: ['n ∈ {0; 2}', 'n = 1', 'n = 0', 'n = 3'], correctAnswer: 0 },
  { id: '6-36', grade: 6, difficulty: 'MEDIUM', text: 'Đường tròn (O; 5cm) có đường kính dài:', options: ['10cm', '5cm', '2.5cm', '20cm'], correctAnswer: 0 },
  { id: '6-37', grade: 6, difficulty: 'HARD', text: 'Thực hiện phép tính: (1/2 - 1/3) + (1/3 - 1/4) + (1/4 - 1/5)', options: ['3/10', '1/5', '1/10', '7/10'], correctAnswer: 0 },
  { id: '6-38', grade: 6, difficulty: 'MEDIUM', text: 'Số 0,125 viết dưới dạng phân số tối giản là:', options: ['1/8', '125/1000', '1/4', '1/10'], correctAnswer: 0 },
  { id: '6-39', grade: 6, difficulty: 'HARD', text: 'Kết quả của 1,25 . 0,8 + 3,5 : 0,7 là:', options: ['6', '5', '4', '7'], correctAnswer: 0 },
  { id: '6-40', grade: 6, difficulty: 'HARD', text: 'Tìm x biết: 2^(x+1) = 32', options: ['4', '5', '3', '6'], correctAnswer: 0 },
  { id: '6-41', grade: 6, difficulty: 'HARD', text: 'Số nguyên âm lớn nhất là:', options: ['-1', '0', '-100', 'Không tồn tại'], correctAnswer: 0 },
  { id: '6-42', grade: 6, difficulty: 'HARD', text: 'Tính tổng các số nguyên x thỏa mãn: -5 < x ≤ 4', options: ['0', '-4', '4', '-5'], correctAnswer: 0 },
  { id: '6-43', grade: 6, difficulty: 'HARD', text: 'Một hình lục giác đều có chu vi 18cm. Độ dài một cạnh là:', options: ['3cm', '6cm', '2cm', '4cm'], correctAnswer: 0 },
  { id: '6-44', grade: 6, difficulty: 'HARD', text: 'ƯCLN(120, 144) là:', options: ['24', '12', '48', '6'], correctAnswer: 0 },
  { id: '6-45', grade: 6, difficulty: 'HARD', text: 'Phân tích 500 ra thừa số nguyên tố:', options: ['2^2 . 5^3', '2^3 . 5^2', '2^2 . 5^2 . 5', '4 . 125'], correctAnswer: 0 },
  { id: '6-46', grade: 6, difficulty: 'HARD', text: 'Tìm x biết: 10 + 2x = 4^5 : 4^3', options: ['3', '6', '13', '8'], correctAnswer: 0 },
  { id: '6-47', grade: 6, difficulty: 'HARD', text: 'Diện tích của một hình thoi là 50 cm², một đường chéo là 10cm. Đường chéo kia là:', options: ['10cm', '5cm', '20cm', '15cm'], correctAnswer: 0 },
  { id: '6-48', grade: 6, difficulty: 'HARD', text: 'Góc xOy và góc yOz là hai góc kề bù. Biết góc xOy = 70°. Tính góc yOz.', options: ['110°', '20°', '180°', '70°'], correctAnswer: 0 },
  { id: '6-49', grade: 6, difficulty: 'HARD', text: 'Số các số tự nhiên có hai chữ số chia hết cho cả 2 và 5 là:', options: ['9', '10', '8', '11'], correctAnswer: 0 },
  { id: '6-50', grade: 6, difficulty: 'HARD', text: 'Số nguyên tố x thỏa mãn 10 < x < 15 là:', options: ['11, 13', '11, 13, 14', '11', '13'], correctAnswer: 0 },

  // ========================== LỚP 7 (50 CÂU DUY NHẤT) ==========================
  // --- Chủ đề: Số hữu tỉ & Số thực ---
  { id: '7-1', grade: 7, difficulty: 'MEDIUM', text: 'Số nào sau đây là số vô tỉ?', options: ['√2', '√4', '0,(3)', '22/7'], correctAnswer: 0 },
  { id: '7-2', grade: 7, difficulty: 'MEDIUM', text: 'Giá trị của biểu thức | -3,5 | + | 2,5 | - | -1 | là:', options: ['5', '7', '1', '6'], correctAnswer: 0 },
  { id: '7-3', grade: 7, difficulty: 'HARD', text: 'Thực hiện phép tính: (-1/2)^2 : (1/4) + √0,25 . 2', options: ['2', '1', '1.5', '0.5'], correctAnswer: 0 },
  { id: '7-4', grade: 7, difficulty: 'HARD', text: 'Tìm x biết: |x - 1,2| = 0,8', options: ['x = 2 hoặc x = 0,4', 'x = 2', 'x = 0,4', 'x = 1'], correctAnswer: 0 },
  { id: '7-5', grade: 7, difficulty: 'HARD', text: 'So sánh 2^300 và 3^200:', options: ['2^300 < 3^200', '2^300 > 3^200', '2^300 = 3^200', 'Không so sánh được'], correctAnswer: 0 },
  // --- Chủ đề: Tỉ lệ thức & Đại lượng tỉ lệ ---
  { id: '7-6', grade: 7, difficulty: 'MEDIUM', text: 'Tìm x trong tỉ lệ thức: x / 1,2 = 5 / 6', options: ['x = 1', 'x = 0,1', 'x = 10', 'x = 0,8'], correctAnswer: 0 },
  { id: '7-7', grade: 7, difficulty: 'HARD', text: 'Ba đơn vị kinh doanh góp vốn theo tỉ lệ 3; 5; 7. Tổng số vốn là 450 triệu đồng. Số vốn của đơn vị ít nhất là:', options: ['90 triệu', '150 triệu', '210 triệu', '100 triệu'], correctAnswer: 0 },
  { id: '7-8', grade: 7, difficulty: 'HARD', text: 'Biết x và y tỉ lệ nghịch, khi x = 4 thì y = 9. Khi x = 6 thì y bằng:', options: ['6', '4', '9', '13.5'], correctAnswer: 0 },
  { id: '7-9', grade: 7, difficulty: 'HARD', text: 'Cho x và y tỉ lệ thuận. Biết x1 + x2 = 4 và y1 + y2 = 20. Hệ số tỉ lệ k (y = kx) là:', options: ['5', '1/5', '4', '20'], correctAnswer: 0 },
  // --- Chủ đề: Hình học & Tam giác ---
  { id: '7-10', grade: 7, difficulty: 'MEDIUM', text: 'Cho tam giác ABC có góc A = 50°, góc B = 70°. Số đo góc ngoài tại đỉnh C là:', options: ['120°', '60°', '110°', '130°'], correctAnswer: 0 },
  { id: '7-11', grade: 7, difficulty: 'HARD', text: 'Cho ΔABC cân tại A có góc A = 80°. Gọi M là trung điểm BC. Số đo góc BAM là:', options: ['40°', '80°', '50°', '90°'], correctAnswer: 0 },
  { id: '7-12', grade: 7, difficulty: 'HARD', text: 'Trong một tam giác, giao điểm của ba đường phân giác cách đều:', options: ['Ba cạnh', 'Ba đỉnh', 'Trọng tâm', 'Trực tâm'], correctAnswer: 0 },
  { id: '7-13', grade: 7, difficulty: 'HARD', text: 'Cho ΔABC vuông tại A, đường phân giác BD (D ∈ AC). Kẻ DE ⊥ BC. So sánh AD và DE:', options: ['AD = DE', 'AD > DE', 'AD < DE', 'AD = 2DE'], correctAnswer: 0 },
  { id: '7-14', grade: 7, difficulty: 'HARD', text: 'Cho ΔABC cân tại A, AH là đường cao. Biết AB = 5cm, BC = 6cm. Tính AH.', options: ['4cm', '3cm', '5cm', '√11cm'], correctAnswer: 0 },
  { id: '7-15', grade: 7, difficulty: 'HARD', text: 'Tam giác có độ dài ba cạnh là a, b, c thỏa mãn a² + b² = c² thì đó là tam giác:', options: ['Vuông', 'Cân', 'Đều', 'Tù'], correctAnswer: 0 },
  // --- Chủ đề: Biểu thức đại số & Đa thức ---
  { id: '7-16', grade: 7, difficulty: 'MEDIUM', text: 'Tính giá trị biểu thức M = 2x² - 3x + 1 tại x = -1:', options: ['6', '0', '4', '2'], correctAnswer: 0 },
  { id: '7-17', grade: 7, difficulty: 'HARD', text: 'Tìm bậc của đa thức: P = x^5 - 2x^3 + x^5 - x^5 + 3x^2 - 1', options: ['5', '3', '2', '0'], correctAnswer: 0 },
  { id: '7-18', grade: 7, difficulty: 'HARD', text: 'Cho đa thức f(x) = ax + b. Biết f(1) = 5 và f(2) = 8. Tìm a và b.', options: ['a=3, b=2', 'a=2, b=3', 'a=5, b=0', 'a=3, b=-2'], correctAnswer: 0 },
  { id: '7-19', grade: 7, difficulty: 'HARD', text: 'Tìm nghiệm của đa thức h(x) = x² + 1:', options: ['Vô nghiệm', 'x = 1', 'x = -1', 'x = 0'], correctAnswer: 0 },
  // --- Chủ đề: Hình học không gian cơ bản ---
  { id: '7-20', grade: 7, difficulty: 'HARD', text: 'Một hình lăng trụ đứng tam giác có các cạnh đáy là 3cm, 4cm, 5cm và chiều cao 10cm. Diện tích xung quanh là:', options: ['120 cm²', '60 cm²', '132 cm²', '70 cm²'], correctAnswer: 0 },
  { id: '7-21', grade: 7, difficulty: 'HARD', text: 'Thể tích của một hình lập phương có diện tích toàn phần là 54 cm² là:', options: ['27 cm³', '9 cm³', '81 cm³', '54 cm³'], correctAnswer: 0 },
  // --- Bổ sung lớp 7 ---
  { id: '7-22', grade: 7, difficulty: 'HARD', text: 'Căn bậc hai số học của (-4)² là:', options: ['4', '-4', '16', 'Không tồn tại'], correctAnswer: 0 },
  { id: '7-23', grade: 7, difficulty: 'HARD', text: 'Tìm x biết: 2^x + 2^{x+3} = 144', options: ['x = 4', 'x = 2', 'x = 3', 'x = 5'], correctAnswer: 0 },
  { id: '7-24', grade: 7, difficulty: 'HARD', text: 'Số 0,1(6) viết dưới dạng phân số là:', options: ['1/6', '16/99', '16/90', '1/5'], correctAnswer: 0 },
  { id: '7-25', grade: 7, difficulty: 'HARD', text: 'Hai đường thẳng xx\' và yy\' cắt nhau tại O sao cho góc xOy = 50°. Tính góc x\'Oy\'.', options: ['50°', '130°', '180°', '40°'], correctAnswer: 0 },
  { id: '7-26', grade: 7, difficulty: 'HARD', text: 'Một hộp có 4 quả bóng xanh, 6 quả bóng đỏ. Lấy ngẫu nhiên 2 quả. Xác suất để lấy được 2 quả bóng cùng màu xanh là:', options: ['6/45', '4/10', '16/100', '1/5'], correctAnswer: 0 },
  { id: '7-27', grade: 7, difficulty: 'HARD', text: 'Cho x và y tỉ lệ nghịch. Khi x tăng 25% thì y giảm bao nhiêu phần trăm?', options: ['20%', '25%', '50%', '10%'], correctAnswer: 0 },
  { id: '7-28', grade: 7, difficulty: 'HARD', text: 'Đường thẳng y = ax đi qua điểm M(-2; 4). Hệ số a là:', options: ['-2', '2', '0.5', '-0.5'], correctAnswer: 0 },
  { id: '7-29', grade: 7, difficulty: 'HARD', text: 'Biểu đồ đoạn thẳng biểu diễn nhiệt độ trong ngày. Nếu buổi sáng là 20°C, buổi trưa tăng 5°C, buổi chiều giảm 3°C so với buổi trưa. Nhiệt độ buổi chiều là:', options: ['22°C', '25°C', '23°C', '17°C'], correctAnswer: 0 },
  { id: '7-30', grade: 7, difficulty: 'HARD', text: 'Cho f(x) = 2x - 3. Tìm x để f(x) = x + 1.', options: ['x = 4', 'x = 2', 'x = -4', 'x = 1'], correctAnswer: 0 },
  { id: '7-31', grade: 7, difficulty: 'HARD', text: 'Góc tạo bởi hai tia phân giác của hai góc kề bù là:', options: ['90°', '180°', '45°', '60°'], correctAnswer: 0 },
  { id: '7-32', grade: 7, difficulty: 'HARD', text: 'Cho ΔABC vuông tại A, trung tuyến AM. Biết AM = 5cm. Tính BC.', options: ['10cm', '5cm', '2.5cm', '7.5cm'], correctAnswer: 0 },
  { id: '7-33', grade: 7, difficulty: 'HARD', text: 'Giao điểm của ba đường cao trong tam giác gọi là:', options: ['Trực tâm', 'Trọng tâm', 'Tâm đường tròn ngoại tiếp', 'Tâm đường tròn nội tiếp'], correctAnswer: 0 },
  { id: '7-34', grade: 7, difficulty: 'HARD', text: 'Tam giác cân có một góc bằng 60° là tam giác:', options: ['Đều', 'Vuông', 'Tù', 'Vuông cân'], correctAnswer: 0 },
  { id: '7-35', grade: 7, difficulty: 'HARD', text: 'Cho tam giác ABC có AB < AC. So sánh góc B và góc C:', options: ['Góc B > Góc C', 'Góc B < Góc C', 'Góc B = Góc C', 'Không so sánh được'], correctAnswer: 0 },
  { id: '7-36', grade: 7, difficulty: 'HARD', text: 'Số hữu tỉ a/b là số hữu tỉ dương nếu:', options: ['a, b cùng dấu', 'a, b khác dấu', 'a > 0', 'b > 0'], correctAnswer: 0 },
  { id: '7-37', grade: 7, difficulty: 'HARD', text: 'Tính: (0,125)^100 . 8^100', options: ['1', '8', '0.125', '100'], correctAnswer: 0 },
  { id: '7-38', grade: 7, difficulty: 'HARD', text: 'Lớp 7A có 40 học sinh, tỉ lệ nam và nữ là 2:3. Số học sinh nam là:', options: ['16', '24', '20', '15'], correctAnswer: 0 },
  { id: '7-39', grade: 7, difficulty: 'HARD', text: 'Tìm x biết x/3 = y/4 và x . y = 48 (với x, y > 0):', options: ['x = 6', 'x = 8', 'x = 4', 'x = 12'], correctAnswer: 0 },
  { id: '7-40', grade: 7, difficulty: 'HARD', text: 'Diện tích toàn phần hình hộp chữ nhật có kích thước 2, 3, 4 là:', options: ['52', '24', '48', '26'], correctAnswer: 0 },
  { id: '7-41', grade: 7, difficulty: 'HARD', text: 'Đa thức M = x³ - x² + x - 1. Tính M(1).', options: ['0', '1', '2', '-1'], correctAnswer: 0 },
  { id: '7-42', grade: 7, difficulty: 'HARD', text: 'Bậc của đơn thức -3x^2y^3z là:', options: ['6', '5', '3', '2'], correctAnswer: 0 },
  { id: '7-43', grade: 7, difficulty: 'HARD', text: 'Trong biểu đồ hình quạt, một phần chiếm 25% thì góc ở tâm tương ứng là:', options: ['90°', '45°', '60°', '30°'], correctAnswer: 0 },
  { id: '7-44', grade: 7, difficulty: 'HARD', text: 'Gieo một con xúc xắc, xác suất xuất hiện mặt có số chấm chia hết cho 3 là:', options: ['1/3', '1/2', '1/6', '2/3'], correctAnswer: 0 },
  { id: '7-45', grade: 7, difficulty: 'HARD', text: 'Cho P(x) = x² - 5x + 6. Nghiệm của P(x) là:', options: ['x = 2; x = 3', 'x = 1; x = 6', 'x = -2; x = -3', 'x = 0'], correctAnswer: 0 },
  { id: '7-46', grade: 7, difficulty: 'HARD', text: 'Một lăng trụ đứng có đáy là hình thoi cạnh 5cm, chiều cao 10cm. Diện tích xung quanh là:', options: ['200 cm²', '100 cm²', '50 cm²', '400 cm²'], correctAnswer: 0 },
  { id: '7-47', grade: 7, difficulty: 'HARD', text: 'Tam giác ABC có góc A = 90°, AB = AC. Tính góc B.', options: ['45°', '60°', '30°', '90°'], correctAnswer: 0 },
  { id: '7-48', grade: 7, difficulty: 'HARD', text: 'Đường thẳng song song với trục hoành có dạng:', options: ['y = b (b ≠ 0)', 'x = a (a ≠ 0)', 'y = ax', 'y = x'], correctAnswer: 0 },
  { id: '7-49', grade: 7, difficulty: 'HARD', text: 'Trong ΔABC, tia phân giác góc A cắt BC tại D. So sánh BD/CD và AB/AC:', options: ['BD/CD = AB/AC', 'BD/CD > AB/AC', 'BD/CD < AB/AC', 'BD/CD = AC/AB'], correctAnswer: 0 },
  { id: '7-50', grade: 7, difficulty: 'HARD', text: 'Tính trung bình cộng của dãy số: 2, 4, 6, 8, 10', options: ['6', '5', '7', '8'], correctAnswer: 0 },

  // ========================== LỚP 8 (50 CÂU DUY NHẤT) ==========================
  // --- Chủ đề: Phép nhân đa thức & Hằng đẳng thức ---
  { id: '8-1', grade: 8, difficulty: 'MEDIUM', text: 'Khai triển (2x - 3y)² ta được:', options: ['4x² - 12xy + 9y²', '4x² - 9y²', '4x² - 6xy + 9y²', '4x² + 9y²'], correctAnswer: 0 },
  { id: '8-2', grade: 8, difficulty: 'HARD', text: 'Kết quả của (x - 2)(x^2 + 2x + 4) là:', options: ['x^3 - 8', 'x^3 + 8', '(x - 2)^3', 'x^3 - 4'], correctAnswer: 0 },
  { id: '8-3', grade: 8, difficulty: 'HARD', text: 'Tính giá trị biểu thức A = x^3 - 3x^2 + 3x - 1 tại x = 101:', options: ['1000000', '1030301', '100000', '1010101'], correctAnswer: 0 },
  { id: '8-4', grade: 8, difficulty: 'HARD', text: 'Tìm x biết: (x + 2)^2 - (x - 2)^2 = 16', options: ['x = 2', 'x = 4', 'x = 8', 'x = 0'], correctAnswer: 0 },
  { id: '8-5', grade: 8, difficulty: 'HARD', text: 'Rút gọn biểu thức: (x+1)^3 - (x-1)^3 - 6x^2', options: ['2', '6x', '0', '6x^2 + 2'], correctAnswer: 0 },
  // --- Chủ đề: Phân tích đa thức thành nhân tử ---
  { id: '8-6', grade: 8, difficulty: 'MEDIUM', text: 'Phân tích đa thức x^2 - 4x + 4 - y^2 thành nhân tử:', options: ['(x - 2 - y)(x - 2 + y)', '(x - 2 - y)^2', '(x + 2 - y)(x + 2 + y)', '(x - y - 2)(x + y - 2)'], correctAnswer: 0 },
  { id: '8-7', grade: 8, difficulty: 'HARD', text: 'Phân tích đa thức x^3 - 4x^2 + 4x thành nhân tử:', options: ['x(x - 2)^2', 'x(x + 2)^2', '(x^2 - 4)(x + 1)', 'x(x - 4)(x + 1)'], correctAnswer: 0 },
  { id: '8-8', grade: 8, difficulty: 'HARD', text: 'Phân tích đa thức x^2 - 5x + 6 thành nhân tử:', options: ['(x - 2)(x - 3)', '(x + 2)(x + 3)', '(x - 1)(x - 5)', '(x - 6)(x + 1)'], correctAnswer: 0 },
  { id: '8-9', grade: 8, difficulty: 'HARD', text: 'Đa thức x^4 + 4 được phân tích thành:', options: ['(x^2 + 2x + 2)(x^2 - 2x + 2)', '(x^2 + 2)^2', '(x^2 - 2)^2', '(x^2 + 2)(x^2 - 2)'], correctAnswer: 0 },
  // --- Chủ đề: Phân thức đại số ---
  { id: '8-10', grade: 8, difficulty: 'MEDIUM', text: 'Điều kiện xác định của phân thức (x + 1) / (x^2 - 4) là:', options: ['x ≠ 2 và x ≠ -2', 'x ≠ 2', 'x ≠ -2', 'x ≠ -1'], correctAnswer: 0 },
  { id: '8-11', grade: 8, difficulty: 'HARD', text: 'Rút gọn phân thức (x^2 - 2x + 1) / (x^2 - 1) ta được:', options: ['(x - 1) / (x + 1)', '(x + 1) / (x - 1)', 'x - 1', '1'], correctAnswer: 0 },
  { id: '8-12', grade: 8, difficulty: 'HARD', text: 'Thực hiện phép tính: 1/(x-1) - 1/(x+1)', options: ['2 / (x^2 - 1)', '2x / (x^2 - 1)', '0', '1 / (x^2 - 1)'], correctAnswer: 0 },
  // --- Chủ đề: Hình học & Tứ giác ---
  { id: '8-13', grade: 8, difficulty: 'MEDIUM', text: 'Hình thang có hai đường chéo bằng nhau là:', options: ['Hình thang cân', 'Hình bình hành', 'Hình thoi', 'Hình chữ nhật'], correctAnswer: 0 },
  { id: '8-14', grade: 8, difficulty: 'HARD', text: 'Cho tam giác ABC có D, E lần lượt là trung điểm của AB, AC. Biết BC = 10cm. Độ dài DE là:', options: ['5cm', '10cm', '20cm', '2.5cm'], correctAnswer: 0 },
  { id: '8-15', grade: 8, difficulty: 'HARD', text: 'Tứ giác có hai đường chéo vuông góc và cắt nhau tại trung điểm của mỗi đường là hình:', options: ['Hình thoi', 'Hình chữ nhật', 'Hình bình hành', 'Hình thang'], correctAnswer: 0 },
  { id: '8-16', grade: 8, difficulty: 'HARD', text: 'Hình vuông có cạnh 4cm, độ dài đường chéo của nó là:', options: ['4√2 cm', '8 cm', '16 cm', '4 cm'], correctAnswer: 0 },
  { id: '8-17', grade: 8, difficulty: 'HARD', text: 'Tứ giác có các góc đối bằng nhau là hình:', options: ['Hình bình hành', 'Hình thang', 'Hình thoi', 'Hình vuông'], correctAnswer: 0 },
  { id: '8-18', grade: 8, difficulty: 'HARD', text: 'Hình thoi có hai đường chéo dài 6cm và 8cm. Độ dài một cạnh là:', options: ['5cm', '10cm', '7cm', '√14cm'], correctAnswer: 0 },
  // --- Chủ đề: Phương trình & Bất phương trình ---
  { id: '8-19', grade: 8, difficulty: 'MEDIUM', text: 'Giải phương trình: 3x - 5 = x + 7', options: ['x = 6', 'x = 1', 'x = 3', 'x = 12'], correctAnswer: 0 },
  { id: '8-20', grade: 8, difficulty: 'HARD', text: 'Nghiệm của phương trình (x - 1)/2 + (x - 1)/3 = 5 là:', options: ['x = 7', 'x = 6', 'x = 5', 'x = 11'], correctAnswer: 0 },
  { id: '8-21', grade: 8, difficulty: 'HARD', text: 'Tìm x nguyên lớn nhất thỏa mãn bất phương trình: 5 - 2x > 0', options: ['2', '3', '1', '0'], correctAnswer: 0 },
  // --- Bổ sung lớp 8 ---
  { id: '8-22', grade: 8, difficulty: 'HARD', text: 'Diện tích xung quanh của hình chóp tứ giác đều có cạnh đáy 6cm và chiều cao mặt bên 5cm là:', options: ['60 cm²', '120 cm²', '30 cm²', '90 cm²'], correctAnswer: 0 },
  { id: '8-23', grade: 8, difficulty: 'HARD', text: 'Thể tích hình chóp tam giác đều có diện tích đáy 10 cm² và chiều cao 6cm là:', options: ['20 cm³', '60 cm³', '30 cm³', '10 cm³'], correctAnswer: 0 },
  { id: '8-24', grade: 8, difficulty: 'HARD', text: 'Trong ΔABC, đường phân giác ngoài của góc A cắt BC kéo dài tại E. Hệ thức nào đúng?', options: ['EB/EC = AB/AC', 'EB/EC = AC/AB', 'EB . EC = AB . AC', 'EB + EC = AB + AC'], correctAnswer: 0 },
  { id: '8-25', grade: 8, difficulty: 'HARD', text: 'Đường trung bình của hình thang có hai đáy là 8cm và 12cm là:', options: ['10cm', '20cm', '4cm', '96cm'], correctAnswer: 0 },
  { id: '8-26', grade: 8, difficulty: 'HARD', text: 'Hai tam giác đồng dạng với tỉ số k = 1/2. Tỉ số diện tích của chúng là:', options: ['1/4', '1/2', '2', '4'], correctAnswer: 0 },
  { id: '8-27', grade: 8, difficulty: 'HARD', text: 'Thực hiện phép tính: (x + 3)(x - 3) - (x - 2)^2', options: ['4x - 13', '4x + 13', '-13', '-5'], correctAnswer: 0 },
  { id: '8-28', grade: 8, difficulty: 'HARD', text: 'Hằng đẳng thức nào sau đây đúng?', options: ['a^3 - b^3 = (a-b)(a^2+ab+b^2)', 'a^3 - b^3 = (a-b)^3', 'a^3 + b^3 = (a+b)(a^2+ab+b^2)', 'a^2 - b^2 = (a-b)^2'], correctAnswer: 0 },
  { id: '8-29', grade: 8, difficulty: 'HARD', text: 'Phân tích đa thức x^2 - y^2 + 2x + 1 thành nhân tử:', options: ['(x + 1 - y)(x + 1 + y)', '(x + y + 1)(x - y + 1)', '(x - y - 1)(x + y - 1)', '(x + 1)^2 - y^2'], correctAnswer: 0 },
  { id: '8-30', grade: 8, difficulty: 'HARD', text: 'Tìm giá trị x để phân thức (x^2 - 9) / (x + 3) bằng 0:', options: ['x = 3', 'x = -3', 'x = 3 hoặc x = -3', 'Không có giá trị nào'], correctAnswer: 0 },
  { id: '8-31', grade: 8, difficulty: 'HARD', text: 'Hình vuông có diện tích 32 cm². Độ dài đường chéo là:', options: ['8 cm', '4 cm', '√32 cm', '16 cm'], correctAnswer: 0 },
  { id: '8-32', grade: 8, difficulty: 'HARD', text: 'Cho hình bình hành ABCD có góc A = 110°. Góc B bằng:', options: ['70°', '110°', '180°', '90°'], correctAnswer: 0 },
  { id: '8-33', grade: 8, difficulty: 'HARD', text: 'Tứ giác có bù nhau hai góc đối là hình gì?', options: ['Tứ giác nội tiếp', 'Hình thang cân', 'Hình chữ nhật', 'Cả B và C đều đúng'], correctAnswer: 3 },
  { id: '8-34', grade: 8, difficulty: 'HARD', text: 'Diện tích hình thoi có cạnh 5cm và một đường chéo 6cm là:', options: ['24 cm²', '30 cm²', '15 cm²', '12 cm²'], correctAnswer: 0 },
  { id: '8-35', grade: 8, difficulty: 'HARD', text: 'Nghiệm của phương trình |x - 3| = x - 3 là:', options: ['x ≥ 3', 'x = 3', 'x > 3', 'Mọi x'], correctAnswer: 0 },
  { id: '8-36', grade: 8, difficulty: 'HARD', text: 'Rút gọn biểu thức (x+2)^2 - x(x+4):', options: ['4', '0', '8x + 4', '4x + 4'], correctAnswer: 0 },
  { id: '8-37', grade: 8, difficulty: 'HARD', text: 'Tìm m để phương trình (m-1)x = 2 có nghiệm duy nhất:', options: ['m ≠ 1', 'm = 1', 'm ≠ 0', 'm > 1'], correctAnswer: 0 },
  { id: '8-38', grade: 8, difficulty: 'HARD', text: 'Hình chữ nhật có chu vi 20cm, một cạnh 4cm. Diện tích là:', options: ['24 cm²', '16 cm²', '40 cm²', '20 cm²'], correctAnswer: 0 },
  { id: '8-39', grade: 8, difficulty: 'HARD', text: 'Cho ΔABC đồng dạng ΔDEF theo tỉ số k=3. Diện tích ΔABC là 27. Diện tích ΔDEF là:', options: ['3', '9', '81', '1'], correctAnswer: 0 },
  { id: '8-40', grade: 8, difficulty: 'HARD', text: 'Đường trung bình của tam giác có độ dài 4cm. Cạnh tương ứng là:', options: ['8 cm', '4 cm', '2 cm', '16 cm'], correctAnswer: 0 },
  { id: '8-41', grade: 8, difficulty: 'HARD', text: 'Bậc của đa thức x^2y^2 - x^3y + x^4 là:', options: ['4', '3', '5', '8'], correctAnswer: 0 },
  { id: '8-42', grade: 8, difficulty: 'HARD', text: 'Phân tích đa thức 4x^2 - 1/9 thành nhân tử:', options: ['(2x - 1/3)(2x + 1/3)', '(2x - 1/9)(2x + 1/9)', '(4x - 1/3)(4x + 1/3)', '(2x - 1/3)^2'], correctAnswer: 0 },
  { id: '8-43', grade: 8, difficulty: 'HARD', text: 'Hình thang cân có một góc 60°. Các góc còn lại là:', options: ['60°, 120°, 120°', '60°, 60°, 180°', '120°, 120°, 120°', '90°, 90°, 120°'], correctAnswer: 0 },
  { id: '8-44', grade: 8, difficulty: 'HARD', text: 'Diện tích hình thoi có hai đường chéo d1, d2 là:', options: ['1/2 . d1 . d2', 'd1 . d2', '2 . d1 . d2', 'd1 + d2'], correctAnswer: 0 },
  { id: '8-45', grade: 8, difficulty: 'HARD', text: 'Phương trình x^2 = -4 có bao nhiêu nghiệm?', options: ['0', '1', '2', 'Vô số'], correctAnswer: 0 },
  { id: '8-46', grade: 8, difficulty: 'HARD', text: 'Rút gọn phân thức (x^3 - 1) / (x^2 + x + 1):', options: ['x - 1', 'x + 1', '1', 'x^2 - 1'], correctAnswer: 0 },
  { id: '8-47', grade: 8, difficulty: 'HARD', text: 'Tứ giác có hai cạnh đối song song và hai cạnh đối kia bằng nhau là:', options: ['Hình thang cân hoặc hình bình hành', 'Luôn là hình thang cân', 'Luôn là hình bình hành', 'Hình thoi'], correctAnswer: 0 },
  { id: '8-48', grade: 8, difficulty: 'HARD', text: 'Bất phương trình -2x < 4 tương đương với:', options: ['x > -2', 'x < -2', 'x > 2', 'x < 2'], correctAnswer: 0 },
  { id: '8-49', grade: 8, difficulty: 'HARD', text: 'Tính (x-1)^3 ta được:', options: ['x^3 - 3x^2 + 3x - 1', 'x^3 - 1', 'x^3 - 3x + 1', 'x^3 + 3x^2 - 3x + 1'], correctAnswer: 0 },
  { id: '8-50', grade: 8, difficulty: 'HARD', text: 'Trong tam giác vuông, đường trung tuyến ứng với cạnh huyền bằng:', options: ['Nửa cạnh huyền', 'Cạnh huyền', 'Gấp đôi cạnh huyền', 'Căn bậc hai cạnh huyền'], correctAnswer: 0 },

  // ========================== LỚP 9 (50 CÂU DUY NHẤT) ==========================
  // --- Chủ đề: Căn bậc hai & Căn bậc ba ---
  { id: '9-1', grade: 9, difficulty: 'MEDIUM', text: 'Tìm x lớn nhất thỏa mãn √(2x - 1) ≤ 3:', options: ['x = 5', 'x = 4', 'x = 1/2', 'x = 3'], correctAnswer: 0 },
  { id: '9-2', grade: 9, difficulty: 'HARD', text: 'Rút gọn biểu thức A = √(9 - 4√5) + √5:', options: ['2', '3', '2√5', '√5 - 2'], correctAnswer: 0 },
  { id: '9-3', grade: 9, difficulty: 'HARD', text: 'Giải phương trình: √(x^2 - 4x + 4) = 3', options: ['x = 5 hoặc x = -1', 'x = 5', 'x = -1', 'x = 1'], correctAnswer: 0 },
  { id: '9-4', grade: 9, difficulty: 'HARD', text: 'Cho biểu thức P = √x / (√x + 3). Tìm x để P = 1/2:', options: ['x = 9', 'x = 3', 'x = 0', 'x = 1'], correctAnswer: 0 },
  { id: '9-5', grade: 9, difficulty: 'HARD', text: 'So sánh: √(25 + 9) và √25 + √9:', options: ['√(25 + 9) < √25 + √9', '√(25 + 9) > √25 + √9', '√(25 + 9) = √25 + √9', 'Không so sánh được'], correctAnswer: 0 },
  // --- Chủ đề: Hàm số bậc nhất & Hệ phương trình ---
  { id: '9-6', grade: 9, difficulty: 'MEDIUM', text: 'Cho đường thẳng y = (2m - 1)x + 3. Tìm m để đường thẳng song song với y = 3x:', options: ['m = 2', 'm = 1', 'm = 0', 'm = 3'], correctAnswer: 0 },
  { id: '9-7', grade: 9, difficulty: 'HARD', text: 'Tìm m để hệ phương trình {mx + y = 3; x + my = 3} có nghiệm duy nhất:', options: ['m ≠ 1 và m ≠ -1', 'm ≠ 1', 'm ≠ -1', 'm = 1'], correctAnswer: 0 },
  { id: '9-8', grade: 9, difficulty: 'HARD', text: 'Giải hệ phương trình {2x - y = 5; 3x + 2y = 4}:', options: ['x=2, y=-1', 'x=1, y=-3', 'x=3, y=1', 'x=-1, y=2'], correctAnswer: 0 },
  { id: '9-9', grade: 9, difficulty: 'HARD', text: 'Đường thẳng d: y = ax + b cắt trục tung tại điểm có tung độ bằng 2 và đi qua A(2, 0). Phương trình d là:', options: ['y = -x + 2', 'y = x + 2', 'y = -2x + 2', 'y = 2x + 2'], correctAnswer: 0 },
  // --- Chủ đề: Hệ thức lượng trong tam giác vuông ---
  { id: '9-10', grade: 9, difficulty: 'MEDIUM', text: 'Cho ΔABC vuông tại A, đường cao AH. Biết HB = 4, HC = 9. Tính AH.', options: ['6', '√13', '13', '3.6'], correctAnswer: 0 },
  { id: '9-11', grade: 9, difficulty: 'HARD', text: 'Cho tam giác vuông có một góc 30° và cạnh huyền bằng 8. Cạnh đối diện với góc 30° là:', options: ['4', '4√3', '4√2', '2'], correctAnswer: 0 },
  { id: '9-12', grade: 9, difficulty: 'HARD', text: 'Trong ΔABC vuông tại A, biết tan B = 3/4. Tính sin B.', options: ['3/5', '4/5', '3/7', '4/3'], correctAnswer: 0 },
  // --- Chủ đề: Đường tròn ---
  { id: '9-13', grade: 9, difficulty: 'MEDIUM', text: 'Cho đường tròn (O; 5cm) và dây AB = 8cm. Khoảng cách từ O đến AB là:', options: ['3 cm', '4 cm', '5 cm', '√39 cm'], correctAnswer: 0 },
  { id: '9-14', grade: 9, difficulty: 'HARD', text: 'Góc tạo bởi tia tiếp tuyến và dây cung chắn cung 120° có số đo là:', options: ['60°', '120°', '30°', '90°'], correctAnswer: 0 },
  { id: '9-15', grade: 9, difficulty: 'HARD', text: 'Hai đường tròn (O; 5) và (O\'; 3) tiếp xúc ngoài khi khoảng cách OO\' là:', options: ['8', '2', '15', '√34'], correctAnswer: 0 },
  { id: '9-16', grade: 9, difficulty: 'HARD', text: 'Tứ giác nội tiếp đường tròn có hai góc đối lần lượt là x và 2x. Tính x.', options: ['60°', '30°', '90°', '120°'], correctAnswer: 0 },
  // --- Chủ đề: Phương trình bậc hai ---
  { id: '9-17', grade: 9, difficulty: 'MEDIUM', text: 'Phương trình x^2 - 4x + m = 0 có nghiệm kép khi m bằng:', options: ['4', '-4', '2', '0'], correctAnswer: 0 },
  { id: '9-18', grade: 9, difficulty: 'HARD', text: 'Cho phương trình x^2 - 5x + 3 = 0 có hai nghiệm x1, x2. Tính x1^2 + x2^2.', options: ['19', '25', '31', '22'], correctAnswer: 0 },
  { id: '9-19', grade: 9, difficulty: 'HARD', text: 'Tìm m để phương trình x^2 - 2x + m - 1 = 0 có hai nghiệm trái dấu.', options: ['m < 1', 'm > 1', 'm = 1', 'm ≤ 1'], correctAnswer: 0 },
  // --- Chủ đề: Hình học không gian ---
  { id: '9-20', grade: 9, difficulty: 'HARD', text: 'Một hình trụ có bán kính đáy 3cm và diện tích xung quanh là 30π cm². Chiều cao hình trụ là:', options: ['5 cm', '10 cm', '3 cm', '15 cm'], correctAnswer: 0 },
  { id: '9-21', grade: 9, difficulty: 'HARD', text: 'Thể tích hình cầu có bán kính 3cm là:', options: ['36π cm³', '12π cm³', '108π cm³', '27π cm³'], correctAnswer: 0 },
  // --- Bổ sung lớp 9 ---
  { id: '9-22', grade: 9, difficulty: 'HARD', text: 'Trục căn thức ở mẫu: 1 / (√3 - √2)', options: ['√3 + √2', '√3 - √2', '5', '1'], correctAnswer: 0 },
  { id: '9-23', grade: 9, difficulty: 'HARD', text: 'Tìm x biết: ∛(x + 1) = -2', options: ['x = -9', 'x = -7', 'x = -8', 'x = 7'], correctAnswer: 0 },
  { id: '9-24', grade: 9, difficulty: 'HARD', text: 'Đường thẳng y = ax + b song song với y = -2x và đi qua A(1; 3). Tính a + b.', options: ['3', '5', '-1', '1'], correctAnswer: 0 },
  { id: '9-25', grade: 9, difficulty: 'HARD', text: 'Tìm giao điểm của Parabol y = x^2 và đường thẳng y = 2x + 3.', options: ['(3; 9) và (-1; 1)', '(3; 9)', '(-1; 1)', '(1; 1) và (3; 9)'], correctAnswer: 0 },
  { id: '9-26', grade: 9, difficulty: 'HARD', text: 'Hệ phương trình {x/2 + y/3 = 1; x + y = 2.5} có nghiệm (x; y) là:', options: ['(1; 1.5)', '(1.5; 1)', '(2; 0)', '(0; 3)'], correctAnswer: 0 },
  { id: '9-27', grade: 9, difficulty: 'HARD', text: 'Tam giác đều nội tiếp đường tròn (O; R). Cạnh của tam giác là:', options: ['R√3', 'R', 'R√2', '2R'], correctAnswer: 0 },
  { id: '9-28', grade: 9, difficulty: 'HARD', text: 'Từ điểm A nằm ngoài đường tròn (O), kẻ hai tiếp tuyến AB, AC. Biết góc BOC = 120°. Tính góc BAC.', options: ['60°', '120°', '30°', '90°'], correctAnswer: 0 },
  { id: '9-29', grade: 9, difficulty: 'HARD', text: 'Số điểm chung của hai đường tròn (O; 5) và (I; 3) khi OI = 2 là:', options: ['1 (tiếp xúc trong)', '2', '0', 'Vô số'], correctAnswer: 0 },
  { id: '9-30', grade: 9, difficulty: 'HARD', text: 'Phương trình x^2 - 2(m+1)x + m^2 + 2 = 0 có nghiệm khi:', options: ['m ≥ 1/2', 'm < 1/2', 'm = 1/2', 'Mọi m'], correctAnswer: 0 },
  { id: '9-31', grade: 9, difficulty: 'HARD', text: 'Tính giá trị biểu thức: sin^2 35° + sin^2 55°', options: ['1', '0', '2', '0.5'], correctAnswer: 0 },
  { id: '9-32', grade: 9, difficulty: 'HARD', text: 'Trong tam giác vuông, hệ thức nào sau đây sai?', options: ['sin A = cos A', 'sin^2 A + cos^2 A = 1', 'tan A = cot(90-A)', 'cos A = sin(90-A)'], correctAnswer: 0 },
  { id: '9-33', grade: 9, difficulty: 'HARD', text: 'Số đo góc có đỉnh bên trong đường tròn bằng:', options: ['Nửa tổng số đo hai cung bị chắn', 'Nửa hiệu số đo hai cung bị chắn', 'Tổng số đo hai cung bị chắn', 'Số đo cung bị chắn'], correctAnswer: 0 },
  { id: '9-34', grade: 9, difficulty: 'HARD', text: 'Diện tích hình tròn ngoại tiếp hình vuông cạnh a là:', options: ['πa²/2', 'πa²', 'πa²/4', '2πa²'], correctAnswer: 0 },
  { id: '9-35', grade: 9, difficulty: 'HARD', text: 'Cho x^2 - mx + m - 1 = 0. Tìm m để phương trình có hai nghiệm cùng dấu.', options: ['m > 1', 'm < 1', 'm = 1', 'm ≥ 1'], correctAnswer: 0 },
  { id: '9-36', grade: 9, difficulty: 'HARD', text: 'Đồ thị hàm số y = -x^2 có bề lõm hướng về phía:', options: ['Dưới', 'Trên', 'Trái', 'Phải'], correctAnswer: 0 },
  { id: '9-37', grade: 9, difficulty: 'HARD', text: 'Nghiệm của phương trình x^4 - 5x^2 + 4 = 0 là:', options: ['±1; ±2', '1; 2', '±1', '±4'], correctAnswer: 0 },
  { id: '9-38', grade: 9, difficulty: 'HARD', text: 'Hình nón có bán kính đáy R, đường sinh l. Diện tích xung quanh là:', options: ['πRl', '2πRl', 'πR^2l', '1/3πRl'], correctAnswer: 0 },
  { id: '9-39', grade: 9, difficulty: 'HARD', text: 'Thể tích hình nón có R = 3, h = 4 là:', options: ['12π', '36π', '16π', '48π'], correctAnswer: 0 },
  { id: '9-40', grade: 9, difficulty: 'HARD', text: 'Diện tích mặt cầu tăng gấp 4 lần thì bán kính tăng gấp:', options: ['2 lần', '4 lần', '16 lần', '√2 lần'], correctAnswer: 0 },
  { id: '9-41', grade: 9, difficulty: 'HARD', text: 'Với x < 0, √(x^2) bằng:', options: ['-x', 'x', '±x', '0'], correctAnswer: 0 },
  { id: '9-42', grade: 9, difficulty: 'HARD', text: 'Hàm số y = (m^2 + 1)x - 2 luôn như thế nào?', options: ['Đồng biến', 'Nghịch biến', 'Không xác định', 'Hàm hằng'], correctAnswer: 0 },
  { id: '9-43', grade: 9, difficulty: 'HARD', text: 'Hệ phương trình {ax + by = c; a\'x + b\'y = c\'} vô nghiệm khi:', options: ['a/a\' = b/b\' ≠ c/c\'', 'a/a\' = b/b\' = c/c\'', 'a/a\' ≠ b/b\'', 'a/a\' = c/c\''], correctAnswer: 0 },
  { id: '9-44', grade: 9, difficulty: 'HARD', text: 'Trong một đường tròn, góc nội tiếp và góc ở tâm cùng chắn một cung thì:', options: ['Góc nội tiếp = 1/2 góc ở tâm', 'Góc nội tiếp = góc ở tâm', 'Góc nội tiếp = 2 lần góc ở tâm', 'Góc nội tiếp + góc ở tâm = 180°'], correctAnswer: 0 },
  { id: '9-45', grade: 9, difficulty: 'HARD', text: 'Hình vuông có cạnh 2cm. Bán kính đường tròn nội tiếp là:', options: ['1 cm', '2 cm', '√2 cm', '0.5 cm'], correctAnswer: 0 },
  { id: '9-46', grade: 9, difficulty: 'HARD', text: 'Cung AB có số đo 60°. Độ dài cung AB (bán kính R) là:', options: ['πR/3', 'πR/6', 'πR/180', '60πR'], correctAnswer: 0 },
  { id: '9-47', grade: 9, difficulty: 'HARD', text: 'Phương trình ax^2 + bx + c = 0 (a ≠ 0) có a + b + c = 0 thì nghiệm là:', options: ['1 và c/a', '-1 và -c/a', '1 và -c/a', '0 và 1'], correctAnswer: 0 },
  { id: '9-48', grade: 9, difficulty: 'HARD', text: 'Diện tích hình quạt tròn bán kính R, số đo cung 90° là:', options: ['πR^2/4', 'πR^2/2', 'πR^2', 'πR/2'], correctAnswer: 0 },
  { id: '9-49', grade: 9, difficulty: 'HARD', text: 'Hàm số y = ax^2 (a > 0) nghịch biến khi:', options: ['x < 0', 'x > 0', 'x = 0', 'Mọi x'], correctAnswer: 0 },
  { id: '9-50', grade: 9, difficulty: 'HARD', text: 'Cho (P): y = x^2 và (d): y = 2x + m. Tìm m để (d) tiếp xúc (P).', options: ['m = -1', 'm = 1', 'm = 0', 'm = 2'], correctAnswer: 0 },
];

export const getRandomQuestions = (grade: Grade, count: number = 20, difficulty?: 'EASY' | 'MEDIUM' | 'HARD'): Question[] => {
  let gradeQuestions = baseQuestions.filter(q => q.grade === grade);
  
  if (difficulty) {
    const diffQuestions = gradeQuestions.filter(q => q.difficulty === difficulty);
    if (diffQuestions.length > 0) gradeQuestions = diffQuestions;
  }

  // Shuffle questions first
  const shuffledQuestions = [...gradeQuestions].sort(() => 0.5 - Math.random());
  
  // If pool is smaller than count, repeat questions (ideally we add more real questions)
  let selected: Question[] = [];
  while (selected.length < count && shuffledQuestions.length > 0) {
    const remaining = count - selected.length;
    selected = [...selected, ...shuffledQuestions.slice(0, remaining)];
    // Re-shuffle for next iteration if we need more
    if (selected.length < count) {
      shuffledQuestions.sort(() => 0.5 - Math.random());
    }
  }

  // For each question, shuffle its options and update correctAnswer index
  // Ensure no two consecutive questions have the same correctAnswer digit if possible
  const randomized = [];
  let prevCorrectIndex = -1;

  for (const q of selected) {
    const originalOptions = [...q.options];
    const correctOptionValue = originalOptions[q.correctAnswer];
    
    let shuffledOptions: string[] = [];
    let newCorrectAnswerIndex = -1;
    let attempts = 0;

    // Retry shuffle up to 10 times if we get the same consecutive answer index
    do {
      shuffledOptions = [...originalOptions].sort(() => 0.5 - Math.random());
      newCorrectAnswerIndex = shuffledOptions.indexOf(correctOptionValue);
      attempts++;
    } while (newCorrectAnswerIndex === prevCorrectIndex && attempts < 10);

    prevCorrectIndex = newCorrectAnswerIndex;
    randomized.push({
      ...q,
      options: shuffledOptions,
      correctAnswer: newCorrectAnswerIndex
    });
  }

  return randomized;
};
