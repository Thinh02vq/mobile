# Nguyễn Trọng Thịnh
### MSV: 20810310370
## Ket qua:
Bài tập thực hành 28/03:
![Bài thực hành](z6452130754057_4ea8c03b9e95fd5f47c64fca21193e41.jpg)
![Bài thực hành](z6452138024594_67acc71ca5d87d45c8691259398924d1.jpg)
![Bài thực hành](z6452130750796_7a064abf67681424ec92843a84ff7ca2.jpg)



Bài tập thực hành 24/03:
![Bài thực hành](z6437255996861_da6742ae657e209c19549b38b751498a.jpg)
![Bài thực hành](z6437256141250_5559f0511fe46a110c96f9955e475679.jpg)
![Bài thực hành](z6437525901182_19b845dd9437e6e3e7c114983bb4201a.jpg)
![Bài thực hành](z6437256015084_7f2c807207d5c6a1b79dd45ed1ed6e82.jpg)

Bài tập thực hành22/03:
![Bài thực hành](z6431740488217_4db7fd5692877a0b8673c4a196a5391d.jpg)
![Bài thực hành](z6431740488674_9c518ed20191583f072953ae0f69cde4.jpg)


Bài kiểm tra:
![Bài kiểm tra](kiemtra01.jpg)
![Bài kiểm tra](kiemtra02.jpg)


Bài tập cuối slide buổi 8:
![Bài tập](buoi8(3).jpg)
![Bài tập ](buoi8(2).jpg)
![Bài tập ](buoi8(1).jpg)

Bài tập 04:Validate form
![Bài tập 04](z6328896881609_42e6e76ef8204891215ac74f89aca432.jpg)
![Bài tập 04](z6328896887153_355b960ad23cca235e17fa66771d6552.jpg)
![Bài tập 04](z6328896890967_6a46ad6dbc9ec10ea8de3a3e3f9c7ad3.jpg)




bài tập cuối Slide buổi 05:
![Bài tập slide buổi 05.1](z6307223369750_c9449fafada673a6a9d95abf659585fd.jpg)
![Bài tập slide buổi 05.2](z6307223371443_5823c6a3be3d27c7bd2a3dfdb39f7e06.jpg)
![Bài tập slide buổi 05.3](z6307223383876_01b130bbfa56a4ce6bfe3f7592aed2cc.jpg)





So sánh giữa FlatList và SectionList trong React Native:
1. Mục đích sử dụng:
FlatList:

Dùng để hiển thị danh sách các phần tử phẳng, không có phân nhóm.
Thích hợp cho các danh sách đơn giản, như danh sách sản phẩm, danh bạ, hoặc danh sách bài viết.
SectionList:

Dùng để hiển thị danh sách được phân thành các nhóm (sections).
Mỗi nhóm có thể có tiêu đề riêng (header) và các mục liên quan.
Thích hợp cho dữ liệu phân cấp, ví dụ: danh bạ phân nhóm theo chữ cái, lịch trình theo ngày.
2. Cấu trúc dữ liệu:
FlatList:

Nhận một mảng đơn giản.
javascript
Sao chép mã
const data = [
  { id: '1', title: 'Item 1' },
  { id: '2', title: 'Item 2' },
  { id: '3', title: 'Item 3' },
];
SectionList:

Nhận một mảng chứa các đối tượng, trong đó mỗi đối tượng đại diện cho một nhóm (section).
javascript
Sao chép mã
const sections = [
  {
    title: 'Section 1',
    data: ['Item 1-1', 'Item 1-2', 'Item 1-3'],
  },
  {
    title: 'Section 2',
    data: ['Item 2-1', 'Item 2-2'],
  },
];
3. Hiệu năng:
FlatList:

Tối ưu hóa hiệu năng cho danh sách lớn nhờ cơ chế virtualization (chỉ render các item hiển thị trên màn hình).
Thích hợp hơn khi không cần hiển thị danh sách có phân nhóm.
SectionList:

Tương tự như FlatList, cũng được tối ưu hóa với virtualization.
Tuy nhiên, với cấu trúc dữ liệu phức tạp hơn (bao gồm headers và nhiều sections), việc quản lý có thể tiêu tốn thêm bộ nhớ.
Hiệu năng giảm nhẹ khi số lượng sections và headers rất lớn.
4. Tính dễ sử dụng:
FlatList:

Đơn giản hơn, dễ sử dụng khi làm việc với danh sách không phân nhóm.
Cấu hình ít phức tạp hơn.
SectionList:

Đòi hỏi cấu trúc dữ liệu phức tạp hơn, phải cấu hình thêm các header và sections.
Cần thêm logic để xử lý các nhóm và hiển thị headers, nhưng cung cấp nhiều tùy chỉnh hơn cho giao diện phân cấp.
Khi nào nên dùng:
FlatList: Dùng khi bạn chỉ cần hiển thị danh sách phẳng, không có tiêu đề hoặc nhóm.
SectionList: Dùng khi bạn cần phân loại dữ liệu thành các nhóm có tiêu đề rõ ràng, như mục lục, lịch trình hoặc danh bạ.



![Bài tập 02.1](Screenshot_2025-01-07-19-20-16-066_host.exp.exponent.png)
![Bài tập 02.2](Screenshot_2025-01-07-18-25-14-075_host.exp.exponent.png)