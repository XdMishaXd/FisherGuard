import * as tf from '@tensorflow/tfjs';
import { data } from './data.js';

function urlToFeatures(url) 
{
  return [url.length];
}


const TENSOR_1 = tf.tensor2d(data.map(d => urlToFeatures(d.url)));
const TENSOR_2 = tf.tensor2d(data.map(d => [d.label]));


const model = tf.sequential();
model.add(tf.layers.dense({ units: 10, activation: 'relu', inputShape: [1] }));
model.add(tf.layers.dense({ units: 1, activation: 'sigmoid' }));


model.compile(
  { 
    optimizer: 'adam', 
    loss: 'binaryCrossentropy', 
    metrics: ['accuracy'] 
  }
);

model.fit(TENSOR_1, TENSOR_2, { epochs: 10 }).then(() => 
{
  const newUrl = 'https://deti-online.com/pesni/shkolnye-pesni/uchitelyam/';
  const prediction = model.predict(tf.tensor2d([urlToFeatures(newUrl)]));
  prediction.print();
});