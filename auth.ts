import { Grade } from '../types';

export interface GradeSummary {
  grade: Grade;
  sections: {
    title: string;
    content: string[];
  }[];
}

export const knowledgeSummaries: GradeSummary[] = [
  {
    grade: 6,
    sections: [
      {
        title: "Số tự nhiên và Số nguyên",
        content: [
          "Tập hợp: Cách viết tập hợp, tập hợp con.",
          "Phép tính: Thứ tự thực hiện phép tính (Lũy thừa -> Nhân chia -> Cộng trừ).",
          "Chia hết: Dấu hiệu chia hết cho 2, 3, 5, 9.",
          "Số nguyên tố: Là số lớn hơn 1, chỉ có 2 ước là 1 và chính nó.",
          "Số nguyên: Tập hợp Z bao gồm số nguyên âm, số 0 và số nguyên dương."
        ]
      },
      {
        title: "Hình học cơ bản",
        content: [
          "Hình phẳng: Tam giác đều, hình vuông, lục giác đều, hình thoi.",
          "Tính chất: Chu vi và diện tích các hình cơ bản.",
          "Đối xứng: Trục đối xứng và tâm đối xứng của các hình học."
        ]
      }
    ]
  },
  {
    grade: 7,
    sections: [
      {
        title: "Số hữu tỉ và Số thực",
        content: [
          "Số hữu tỉ: Số viết được dưới dạng a/b (a, b thuộc Z, b != 0).",
          "Số thực: Bao gồm số hữu tỉ và số vô tỉ (số thập phân vô hạn không tuần hoàn).",
          "Căn bậc hai: Căn bậc hai số học của số a không âm là số x >= 0 sao cho x² = a."
        ]
      },
      {
        title: "Hình học và Thống kê",
        content: [
          "Tam giác: Tổng ba góc trong tam giác là 180°. Các trường hợp bằng nhau của tam giác.",
          "Đường thẳng: Quan hệ giữa các góc tạo bởi một đường thẳng cắt hai đường thẳng song song.",
          "Thống kê: Biểu đồ đoạn thẳng, biểu đồ hình quạt tròn."
        ]
      }
    ]
  },
  {
    grade: 8,
    sections: [
      {
        title: "Đa thức và Hằng đẳng thức",
        content: [
          "Hằng đẳng thức: 7 hằng đẳng thức đáng nhớ.",
          "Phân tích đa thức: Đặt nhân tử chung, dùng hằng đẳng thức, nhóm hạng tử.",
          "Phân thức đại số: Các phép tính với phân thức."
        ]
      },
      {
        title: "Tứ giác và Phương trình",
        content: [
          "Tứ giác: Hình bình hành, hình chữ nhật, hình thoi, hình vuông.",
          "Hình chóp: Hình chóp tam giác đều, tứ giác đều (thể tích và diện tích xung quanh).",
          "Phương trình: Phương trình bậc nhất một ẩn ax + b = 0."
        ]
      }
    ]
  },
  {
    grade: 9,
    sections: [
      {
        title: "Căn bậc hai và Hàm số",
        content: [
          "Căn bậc hai: Biến đổi đơn giản biểu thức chứa căn bậc hai.",
          "Hàm số: Hàm số bậc nhất y = ax + b và đồ thị. Hàm số y = ax².",
          "Hệ phương trình: Hệ hai phương trình bậc nhất hai ẩn."
        ]
      },
      {
        title: "Hệ thức lượng và Đường tròn",
        content: [
          "Hệ thức lượng: Tỉ số lượng giác của góc nhọn trong tam giác vuông.",
          "Đường tròn: Vị trí tương đối của đường thẳng và đường tròn, đường tròn và đường tròn.",
          "Tứ giác nội tiếp: Tứ giác có tổng hai góc đối bằng 180°."
        ]
      }
    ]
  }
];
