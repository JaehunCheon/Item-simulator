export default (error, req, res, next) => {
  console.error(error);

  if (error.name === 'ValidationError') {
    return res
      .status(400)
      .json({ errorMessage: '데이터 형식이 올바르지 않습니다.' });
  } else {
    return res
      .status(500)
      .json({ errorMessage: '서버에서 에러가 발생했습니다.' });
  }
};
