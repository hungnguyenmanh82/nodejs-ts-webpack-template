# nodejs typescript webpack project template:



# Guide:

Bản chất nếu dùng front-end/back-end trên 1 Node server thì là 2 project độc lập. 2 quá trình build độc lập nhau (giống hệt build front-end trên Java, .Net ) => gộp lại trên 1 project là sai nguyên tắc design.

```
project front-end:  "webpack --watch”  để tạo static file
project Nodejs:  “nodemon app.ts”  để chạy server dùng static file của front-end.
```

# Deploy

Giống hệt Java, các node_modules sẽ chỉ đc Nodejs load khi App import yêu cầu nó ở runtime.
Khi app run, nó cần tới 1 module mà nó import thì nodejs sẽ tìm kiếm ở project folder trc là “./node_modules”, nếu ko tìm thấy nó sẽ tìm kiếm ở global node_modules.
Có 3 cách deploy:

```
Cách 1: dùng webpack add tất cả modules lib vào app.js
Cách 2: ko add code modules lib vào app.js, mà dùng modules ở local   (npm i –save lib)
Cach 3: ko add code modules lib vào app.js, dùng modules ở global  (npm I –g lib)
```

Cách 1: (ko nên) lúc start server sẽ chậm nếu code lớn. vì add hết class vào nodejs
Cách 2: (nên) ta sẽ quản lý đc version của Module. Cách này lúc start server nhanh. Class nào ko dùng có thể đc unload. Ở cách này ta có 2 tùy chọn. Dùng webpack để bundle các file “src/_.ts” vào làm 1. Hoặc ko dùng webpack. Chỉ cần tsc là đủ, để các file _.ts gen ra \_.js tương ứng.
Cách 3: (ko nên) dùng chung module giữa nhiều app (ko nên), xu thế dùng docker độc lập toàn bộ thư viện giữa các app.

# Typescript

Tsc chỉ transpile _.ts sang _.js. Nó ko minify nên ko phân biệt Development/Product.
Khi transpile nó sẽ sinh ra \_.map để hỗ trợ debug cho TypeScript.
Webpack hỗ trợ minify và bundle nên nó mới có chế độ Development/Product.
