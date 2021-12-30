import BotMessage from './models/bot-message.model';

export default class DatabaseIntegration {
  /**
   * Method to return animal feedings from animal informed
   *
   * @param  {AnimalEnum} animalName: type of animal
   * @returns {Promise<Array<AnimalFeeding>>}: promise to return list of AnimalFeeding
   */
  public static async send(message: BotMessage): Promise<BotMessage> {
    return new BotMessage('helo', new Map());
  }
}
