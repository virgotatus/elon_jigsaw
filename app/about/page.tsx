import Image from "next/image";
import wxpay from "../assets/wxpay.jpg";
import Link from "next/link";

const AboutPage = () => {
  return (
    <>
      <div id="contract">
        <h1>联系方式:</h1>
        <p>邮箱: ylgong2020@163.com</p>
        <p>
          网站: <Link href="blog.elonarise.top">blog.elonarise.top</Link>
        </p>
      </div>
      <div id="friend">
        <h1>友情链接</h1>
        <Link href="https://hekukaixin.com/">乔晓萌·何苦开心</Link>
      </div>
      <div id="pay">
        <h1>赞助</h1>
        <ul>
          <li>
            <p>微信赞赏</p>
            <Image src={wxpay} alt="支付宝" className=" w-96" />
          </li>
          <li>
            <Link href="https://paypal.me/elongong?country.x=C2&locale.x=zh_XC">
              Paypal
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default AboutPage;
