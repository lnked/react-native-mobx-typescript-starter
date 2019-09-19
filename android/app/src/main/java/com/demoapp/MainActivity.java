package com.demoapp;

import android.os.Bundle;
import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactRootView;
import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;
import org.devio.rn.splashscreen.SplashScreen;

public class MainActivity extends ReactActivity {

  // Вызывается при входе в "полноценное" состояние.
  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    SplashScreen.show(this);
  }

  /**
   * Returns the name of the main component registered from JavaScript.
   * This is used to schedule rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "DemoApp";
  }

  @Override
  protected ReactActivityDelegate createReactActivityDelegate() {
    return new ReactActivityDelegate(this, getMainComponentName()) {
      @Override
      protected ReactRootView createRootView() {
        return new RNGestureHandlerEnabledRootView(MainActivity.this);
      }
    };
  }

  // // Вызывается, когда метод onCreate завершил свою работу,
  // // и используется для восстановления состояния пользовательского
  // // интерфейса
  // @Override
  // public void onRestoreInstanceState(Bundle savedInstanceState) {
  //     super.onRestoreInstanceState(savedInstanceState);
  //     // Восстановите состояние UI из переменной savedInstanceState.
  //     // Этот объект типа Bundle также был передан в метод onCreate.
  // }

  // // Вызывается перед тем, как Активность становится "видимой".
  // @Override
  // public void onRestart(){
  //     super.onRestart();
  //     // Загрузите изменения, учитывая то, что Активность
  //     // уже стала "видимой" в рамках данного процесса.
  // }

  // // Вызывается в начале "видимого" состояния.
  // @Override
  // public void onStart(){
  //     super.onStart();
  //     // Примените к UI все необходимые изменения, так как
  //     // Активность теперь видна на экране.
  // }

  // // Вызывается в начале "активного" состояния.
  // @Override
  // public void onResume(){
  //     super.onResume();
  //     // Возобновите все приостановленные обновления UI,
  //     // потоки или процессы, которые были "заморожены",
  //     // когда данный объект был неактивным.
  // }

  // // Вызывается для того, чтобы сохранить пользовательский интерфейс
  // // перед выходом из "активного" состояния.
  // @Override
  // public void onSaveInstanceState(Bundle savedInstanceState) {
  //     // Сохраните состояние UI в переменную savedInstanceState.
  //     // Она будет передана в метод onCreate при закрытии и
  //     // повторном запуске процесса.
  //     super.onSaveInstanceState(savedInstanceState);
  // }

  // // Вызывается перед выходом из "активного" состояния
  // @Override
  // public void onPause(){
  //     // "Замораживает" пользовательский интерфейс, потоки
  //     // или трудоемкие процессы, которые могут не обновляться,
  //     // пока Активность не находится на переднем плане.
  //     super.onPause();
  // }

  // // Вызывается перед тем, как Активность перестает быть "видимой".
  // @Override
  // public void onStop(){
  //     // "Замораживает" пользовательский интерфейс, потоки
  //     // или операции, которые могут подождать, пока Активность
  //     // не отображается на экране. Сохраняйте все введенные
  //     // данные и изменения в UI так, как будто после вызова
  //     // этого метода процесс должен быть закрыт.
  //     super.onStop();
  // }

  // // Вызывается перед выходом из "полноценного" состояния.
  // @Override
  // public void onDestroy(){
  //     // Очистите все ресурсы. Это касается завершения работы
  //     // потоков, закрытия соединений с базой данных и т. д.
  //     super.onDestroy();
  // }

}
