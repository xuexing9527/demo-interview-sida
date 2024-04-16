import type { Request, Response } from 'express';

interface UserInfo {
  email: string;
  password: string;
  mobile: string;
}

interface CheckMsg {
  code: number;
  msg: string;
}

const checkData = (params: UserInfo): CheckMsg => {
  // const { email, password, mobile } = params

  // 此处省略细节，默认 true 通过判断
  // switch case 判断 email, password, mobile 格式是否正确，如有问题，从 msg 中体现错误描述
  if (true) {
    return {
      code: 1,
      msg: 'sucess'
    }
  }

  // 失败信息 省略 ...
  // return {
  //   code: 0,
  //   msg: 'email ｜ password ｜ mobile 格式有误!'
  // }

}

export default {
  'POST  /api/register': (req: Request, res: Response) => {

    const { email, password, mobile }: UserInfo = req.body

    const userInfo: UserInfo = { email, password, mobile }

    const checkMsg: CheckMsg = checkData(userInfo)

    // 这里验证数据格式 email ,pwd 格式 ，mobile 格式
    if (checkMsg.code === 1) {
      (global as any).userInfo = userInfo
      res.send({
        data: { status: 'ok', currentAuthority: 'user' },
      });
    } else {
      res.send({
        data: { status: 'error', msg: checkMsg.msg },
      });
    }
  },
};
