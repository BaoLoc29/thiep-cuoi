import React from "react";
import DSC_1 from "../assets/images/DSC_4.jpg";

import { Button, Form, Input, Select, InputNumber } from "antd";

const End = () => {
  const [form] = Form.useForm();
  const onFinish = async (values) => {
    try {
      const res = await fetch(
        "https://script.google.com/macros/s/AKfycbyB_f3rrXGDhx7HcAWoxeoZ_Bzv3rTh70HYptpuQvVuDniWziG7mYdl_tBu7LFzigO3GA/exec",
        {
          method: "POST",
          body: JSON.stringify({
            fullName: values.fullName,
            phone: values.phone,
            message: values.message,
            attend: values.attend,
            guestCount: values.guestCount,
          }),
        },
      );

      const data = await res.json();

      if (data.success) {
        alert("Gửi thành công!");
        form.resetFields();
      }
    } catch (err) {
      alert("Có lỗi xảy ra");
    }
  };
  return (
    <section className="relative p-6">
      <div>
        <img src={DSC_1} alt="chú rể" className="w-full h-auto" />
      </div>
      <div className="flex flex-col gap-4 text-center py-4">
        <span className="text-3xl font-cormorant uppercase">
          Bạn sẽ đến chứ?
        </span>
        <span className="text-sm">
          Chúng tôi rất chờ đón sự kiện trọng đại này của cuộc đời. Đám cưới của
          chúng tôi sẽ trọn vẹn hơn khi có thêm lời chúc phúc và sự hiện diện
          của các bạn. Xin hãy xác nhận sự có mặt của mình để chúng tôi chuẩn bị
          đón tiếp một cách chu đáo nhất nhé! Trân trọng!
        </span>
      </div>
      <Form form={form} layout="vertical" onFinish={onFinish}>
        <Form.Item
          label="Họ và tên quý khách"
          name="fullName"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập họ tên",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item label="Số điện thoại" name="phone">
          <Input />
        </Form.Item>

        <Form.Item label="Lời chúc" name="message">
          <Input.TextArea rows={4} />
        </Form.Item>

        <Form.Item
          label="Xác nhận tham dự"
          name="attend"
          rules={[
            {
              required: true,
              message: "Vui lòng chọn",
            },
          ]}
        >
          <Select
            options={[
              {
                value: "Có",
                label: "Có",
              },
              {
                value: "Không",
                label: "Không",
              },
            ]}
          />
        </Form.Item>

        <Form.Item noStyle shouldUpdate>
          {({ getFieldValue }) =>
            getFieldValue("attend") === "Có" ? (
              <Form.Item
                label="Số lượng khách tham dự"
                name="guestCount"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập số lượng khách",
                  },
                ]}
              >
                <InputNumber
                  min={1}
                  max={20}
                  className="w-full"
                  placeholder="Ví dụ: 2"
                />
              </Form.Item>
            ) : null
          }
        </Form.Item>

        <Button type="primary" htmlType="submit">
          Gửi xác nhận
        </Button>
      </Form>
    </section>
  );
};

export default End;
