
// vero.h : main header file for the vero application
//
#pragma once

#ifndef __AFXWIN_H__
	#error "include 'stdafx.h' before including this file for PCH"
#endif

#include "resource.h"       // main symbols


// CveroApp:
// See vero.cpp for the implementation of this class
//

class CveroApp : public CWinAppEx
{
public:
	CveroApp();


// Overrides
public:
	virtual BOOL InitInstance();
	virtual int ExitInstance();

// Implementation
	UINT  m_nAppLook;
	afx_msg void OnAppAbout();
	DECLARE_MESSAGE_MAP()
};

extern CveroApp theApp;
