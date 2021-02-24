export abstract class BaseGetInputModel {
  getHeaders(): Record<string, string> {
    return {};
  }

  getQueries(): Record<string, string> {
    return {};
  }

  getUrlVariable(): Record<string, string> {
    return {};
  }
}
