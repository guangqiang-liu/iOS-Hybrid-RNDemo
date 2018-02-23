//
//  RNViewController.m
//  iOSRN
//
//  Created by 刘光强 on 2018/2/22.
//  Copyright © 2018年 刘光强. All rights reserved.
//

#import "RNViewController.h"
#import "RCTRootView.h"

@interface RNViewController ()

@end

@implementation RNViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view.
    
    NSString * strUrl = @"http://localhost:8081/index.ios.bundle?platform=ios&dev=true";
    NSURL * jsCodeLocation = [NSURL URLWithString:strUrl];
    
    RCTRootView * rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                         moduleName:@"MeApp"
                                                  initialProperties:nil
                                                      launchOptions:nil];
    self.view = rootView;
    
}


@end
