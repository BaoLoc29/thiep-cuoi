import React from "react";
import DSC_1 from "../assets/images/DSC_4.jpg";

import { Form, Input, Select, InputNumber } from "antd";

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
        // tạo popup cảm ơn
        form.resetFields();
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
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
        <span className="text-xl font-cormorant">
          Chúng tôi rất mong được đón tiếp bạn trong ngày trọng đại. Sự hiện
          diện của bạn là niềm vui và hạnh phúc đối với gia đình chúng tôi.
        </span>
      </div>
      <div className="max-w-xl mx-auto rounded-3xl bg-white/80 backdrop-blur-md p-6 shadow-xl border border-green-100">
        <Form form={form} layout="vertical" onFinish={onFinish}>
          <Form.Item
            label={
              <span className="text-base font-semibold">Tên quý khách</span>
            }
            name="fullName"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập tên quý khách",
              },
            ]}
          >
            <Input size="large" placeholder="Ví dụ: Trần Văn A" />
          </Form.Item>

          <Form.Item
            label={
              <span className="text-base font-semibold">Số điện thoại</span>
            }
            name="phone"
          >
            <Input size="large" placeholder="09xxxxxxxx" />
          </Form.Item>

          <Form.Item
            label={
              <span className="text-base font-semibold">Lời chúc phúc</span>
            }
            name="message"
          >
            <Input.TextArea
              rows={5}
              placeholder="Gửi lời chúc đến cô dâu & chú rể..."
            />
          </Form.Item>

          <Form.Item
            label={
              <span className="text-base font-semibold">
                Quý khách sẽ tham dự chứ?
              </span>
            }
            name="attend"
            rules={[
              {
                required: true,
                message: "Vui lòng chọn",
              },
            ]}
          >
            <Select
              size="large"
              placeholder="Chọn"
              options={[
                {
                  value: "Có",
                  label: "Có, tôi sẽ tham dự",
                },
                {
                  value: "Không",
                  label: "Xin lỗi, tôi bận mất rồi",
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
                    size="large"
                    min={1}
                    max={5}
                    className="w-full"
                    placeholder="Ví dụ: 2"
                  />
                </Form.Item>
              ) : null
            }
          </Form.Item>

          <button
            type="submit"
            className="rounded-lg bg-green-800 px-10 py-2 text-base font-bold uppercase text-white 
              shadow-lg transition hover:bg-green-700 active:scale-95 w-full"
          >
            Gửi Lời Chúc
          </button>
        </Form>
      </div>
    </section>
  );
};

export default End;
