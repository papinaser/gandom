import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import SurveyNew from './surveys/SurveyNew';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
        <div className="container body">
          <div className="main_container">
            <div className="col-md-3 left_col{% block fix_menu %}{% endblock %} hidden-print">
              <div className="left_col scroll-view">
                <div className="navbar nav_title" style="border: 0;">
                  <a href="index.html" className="site_title"><i className="fa fa-paw"></i>
                    <span>Gentelella Alela!</span></a>
                </div>

                <div className="clearfix"></div>

                <!-- menu profile quick info -->
                <div className="profile clearfix">
                  <div className="profile_pic">
                    <img src="../build/images/img.jpg" alt="..." className="img-circle profile_img">
                  </div>
                  <div className="profile_info">
                    <span>خوش آمدید,</span>
                    <h2>مرتضی کریمی</h2>
                  </div>
                </div>
                <!-- /menu profile quick info -->

                <br/>

                <!-- sidebar menu -->
                <div id="sidebar-menu" className="main_menu_side hidden-print main_menu">
                  <div className="menu_section">
                    <h3>عمومی</h3>
                    <ul className="nav side-menu">
                      <li><a><i className="fa fa-home"></i> خانه <span className="fa fa-chevron-down"></span></a>
                        <ul className="nav child_menu">
                          <li><a href="index.html">داشبورد</a></li>
                          <li><a href="index2.html">داشبورد ۲</a></li>
                          <li><a href="index3.html">داشبورد ۳</a></li>
                        </ul>
                      </li>
                      <li><a><i className="fa fa-edit"></i> فرم <span className="fa fa-chevron-down"></span></a>
                        <ul className="nav child_menu">
                          <li><a href="form.html">فرم عمومی</a></li>
                          <li><a href="form_advanced.html">قطعات پیشرفته</a></li>
                          <li><a href="form_validation.html">فرم اعتبار سنجی</a></li>
                          <li><a href="form_wizards.html">فرم جادوگر</a></li>
                          <li><a href="form_upload.html">فرم بارگذاری</a></li>
                          <li><a href="form_buttons.html">فرم کلید ها</a></li>
                        </ul>
                      </li>
                      <li><a><i className="fa fa-desktop"></i> عناصر ظاهری <span
                          className="fa fa-chevron-down"></span></a>
                        <ul className="nav child_menu">
                          <li><a href="general_elements.html">عناصر عمومی</a></li>
                          <li><a href="media_gallery.html">گالری چندرسانه ای</a></li>
                          <li><a href="typography.html">تایپو گرافی</a></li>
                          <li><a href="icons.html">آیکون ها</a></li>
                          <li><a href="glyphicons.html">Glyphicons</a></li>
                          <li><a href="widgets.html">ابزارک</a></li>
                          <li><a href="invoice.html">صورت حساب</a></li>
                          <li><a href="inbox.html">صندوق</a></li>
                          <li><a href="calendar.html">تقویم</a></li>
                        </ul>
                      </li>
                      <li><a><i className="fa fa-table"></i> جداول <span className="fa fa-chevron-down"></span></a>
                        <ul className="nav child_menu">
                          <li><a href="tables.html">جداول</a></li>
                          <li><a href="tables_dynamic.html">جدول پویا</a></li>
                        </ul>
                      </li>
                      <li><a><i className="fa fa-bar-chart-o"></i> ارائه داده <span
                          className="fa fa-chevron-down"></span></a>
                        <ul className="nav child_menu">
                          <li><a href="chartjs.html">Chart JS</a></li>
                          <li><a href="chartjs2.html">Chart JS2</a></li>
                          <li><a href="morisjs.html">Moris JS</a></li>
                          <li><a href="echarts.html">ECharts</a></li>
                          <li><a href="other_charts.html">چارت های دیگر</a></li>
                        </ul>
                      </li>
                      <li><a><i className="fa fa-clone"></i>طرح بندی <span className="fa fa-chevron-down"></span></a>
                        <ul className="nav child_menu">
                          <li><a href="fixed_sidebar.html">نوار کناری ثابت</a></li>
                          <li><a href="fixed_footer.html">پاورقی ثابت</a></li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  <div className="menu_section">
                    <h3>به صورت زنده</h3>
                    <ul className="nav side-menu">
                      <li><a><i className="fa fa-bug"></i> صفحات اضافی <span className="fa fa-chevron-down"></span></a>
                        <ul className="nav child_menu">
                          <li><a href="e_commerce.html">تجارت الکترونیک</a></li>
                          <li><a href="projects.html">پروژه ها</a></li>
                          <li><a href="project_detail.html">جزئیات پروژه</a></li>
                          <li><a href="contacts.html">اطلاعات تماس</a></li>
                          <li><a href="profile.html">نمایه</a></li>
                        </ul>
                      </li>
                      <li><a><i className="fa fa-windows"></i> افزودنیهای پیشنهاد شده <span
                          className="fa fa-chevron-down"></span></a>
                        <ul className="nav child_menu">
                          <li><a href="page_403.html">403 ارور</a></li>
                          <li><a href="page_404.html">404 ارور</a></li>
                          <li><a href="page_500.html">500 ارور</a></li>
                          <li><a href="plain_page.html">صفحه ساده</a></li>
                          <li><a href="login.html">صفحه ورود</a></li>
                          <li><a href="pricing_tables.html">جداول قیمت</a></li>
                        </ul>
                      </li>
                      <li><a><i className="fa fa-sitemap"></i> منو چند سطحی <span
                          className="fa fa-chevron-down"></span></a>
                        <ul className="nav child_menu">
                          <li><a href="#level1_1">سطح یک</a>
                            <li><a>سطح یک<span className="fa fa-chevron-down"></span></a>
                              <ul className="nav child_menu">
                                <li className="sub_menu"><a href="level2.html">سطح دو</a>
                                </li>
                                <li><a href="#level2_1">سطح دو</a>
                                </li>
                                <li><a href="#level2_2">سطح دو</a>
                                </li>
                              </ul>
                            </li>
                            <li><a href="#level1_2">سطح یک</a>
                            </li>
                        </ul>
                      </li>
                      <li><a href="javascript:void(0)"><i className="fa fa-laptop"></i> صفحه مقصد <span
                          className="label label-success pull-left">به زودی</span></a></li>
                    </ul>
                  </div>

                </div>
                <!-- /sidebar menu -->

                <!-- /menu footer buttons -->
                <div className="sidebar-footer hidden-small">
                  <a data-toggle="tooltip" data-placement="top" title="تنظیمات">
                    <span className="glyphicon glyphicon-cog" aria-hidden="true"></span>
                  </a>
                  <a data-toggle="tooltip" data-placement="top" title="تمام صفحه" onClick="toggleFullScreen();">
                    <span className="glyphicon glyphicon-fullscreen" aria-hidden="true"></span>
                  </a>
                  <a data-toggle="tooltip" data-placement="top" title="قفل" className="lock_btn">
                    <span className="glyphicon glyphicon-eye-close" aria-hidden="true"></span>
                  </a>
                  <a data-toggle="tooltip" data-placement="top" title="خروج" href="login.html">
                    <span className="glyphicon glyphicon-off" aria-hidden="true"></span>
                  </a>
                </div>
                <!-- /menu footer buttons -->
              </div>
            </div>

            <!-- top navigation -->
            <div className="top_nav hidden-print">
              <div className="nav_menu">
                <nav>
                  <div className="nav toggle">
                    <a id="menu_toggle"><i className="fa fa-bars"></i></a>
                  </div>

                  <ul className="nav navbar-nav navbar-right">
                    <li className="">
                      <a href="javascript:;" className="user-profile dropdown-toggle" data-toggle="dropdown"
                         aria-expanded="false">
                        <img src="../build/images/img.jpg" alt="">مرتضی کریمی
                          <span className=" fa fa-angle-down"></span>
                      </a>
                      <ul className="dropdown-menu dropdown-usermenu pull-right">
                        <li><a href="javascript:;"> نمایه</a></li>
                        <li>
                          <a href="javascript:;">
                            <span className="badge bg-red pull-right">50%</span>
                            <span>تنظیمات</span>
                          </a>
                        </li>
                        <li><a href="javascript:;">کمک</a></li>
                        <li><a href="login.html"><i className="fa fa-sign-out pull-right"></i> خروج</a></li>
                      </ul>
                    </li>

                    <li role="presentation" className="dropdown">
                      <a href="javascript:;" className="dropdown-toggle info-number" data-toggle="dropdown"
                         aria-expanded="false">
                        <i className="fa fa-envelope-o"></i>
                        <span className="badge bg-green">6</span>
                      </a>
                      <ul id="menu1" className="dropdown-menu list-unstyled msg_list" role="menu">
                        <li>
                          <a>
                                        <span className="image"><img src="../build/images/img.jpg"
                                                                     alt="Profile Image"/></span>
                            <span>
                          <span>مرتضی کریمی</span>
                          <span className="time">3 دقیقه پیش</span>
                        </span>
                            <span className="message">
                          فیلمای فستیوال فیلمایی که اجرا شده یا راجع به لحظات مرده ایه که فیلمسازا میسازن. آنها جایی بودند که....
                        </span>
                          </a>
                        </li>
                        <li>
                          <a>
                                        <span className="image"><img src="../build/images/img.jpg"
                                                                     alt="Profile Image"/></span>
                            <span>
                          <span>مرتضی کریمی</span>
                          <span className="time">3 دقیقه پیش</span>
                        </span>
                            <span className="message">
                          فیلمای فستیوال فیلمایی که اجرا شده یا راجع به لحظات مرده ایه که فیلمسازا میسازن. آنها جایی بودند که....
                        </span>
                          </a>
                        </li>
                        <li>
                          <a>
                                        <span className="image"><img src="../build/images/img.jpg"
                                                                     alt="Profile Image"/></span>
                            <span>
                          <span>مرتضی کریمی</span>
                          <span className="time">3 دقیقه پیش</span>
                        </span>
                            <span className="message">
                          فیلمای فستیوال فیلمایی که اجرا شده یا راجع به لحظات مرده ایه که فیلمسازا میسازن. آنها جایی بودند که....
                        </span>
                          </a>
                        </li>
                        <li>
                          <a>
                                        <span className="image"><img src="../build/images/img.jpg"
                                                                     alt="Profile Image"/></span>
                            <span>
                          <span>مرتضی کریمی</span>
                          <span className="time">3 دقیقه پیش</span>
                        </span>
                            <span className="message">
                          فیلمای فستیوال فیلمایی که اجرا شده یا راجع به لحظات مرده ایه که فیلمسازا میسازن. آنها جایی بودند که....
                        </span>
                          </a>
                        </li>
                        <li>
                          <div className="text-center">
                            <a>
                              <strong>مشاهده تمام اعلان ها</strong>
                              <i className="fa fa-angle-left"></i>
                            </a>
                          </div>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <!-- /top navigation -->
            <!-- /header content -->
            {% block content %}{% endblock %}
            <!-- footer content -->
            <footer className="hidden-print">
              <div className="pull-left">
                Gentelella - قالب پنل مدیریت بوت استرپ <a href="https://colorlib.com">Colorlib</a> | پارسی شده توسط <a
                  href="https://morteza-karimi.ir">مرتضی کریمی</a>
              </div>
              <div className="clearfix"></div>
            </footer>
            <!-- /footer content -->
          </div>
        </div>
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/surveys" component={Dashboard} />
            <Route path="/surveys/new" component={SurveyNew} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
