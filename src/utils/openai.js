import OpenAI from 'openai';
import {
  OPEN_AI_KEY
} from './constants';

const openai = new OpenAI({
  apiKey: OPEN_AI_KEY
});

export default openai;