const errors = {
    'HYSTRIX-FALLBACK': { status: 412, message: [{ mensagem: 'Sistema indisponível no momento. Por favor tente novamente mais tarde.' }] },
    'JOI-MISSING-FIELDS': { status: 412, message: [{ mensagem: 'Sistema indisponível no momento. Por favor tente novamente mais tarde.' }] },
    default: { status: 500, message: [{ mensagem: 'Erro interno do sistema.' }] },
  };
  
  const getError = err => (errors[err.message] || errors.default);
  
  module.exports = {
    getError,
  };