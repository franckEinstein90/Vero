#pragma once



// right_pane form view

class right_pane : public CFormView
{
	DECLARE_DYNCREATE(right_pane)

protected:
	right_pane();           // protected constructor used by dynamic creation
	virtual ~right_pane();

public:
#ifdef AFX_DESIGN_TIME
	enum { IDD = IDD_FORMVIEW1 };
#endif
#ifdef _DEBUG
	virtual void AssertValid() const;
#ifndef _WIN32_WCE
	virtual void Dump(CDumpContext& dc) const;
#endif
#endif

protected:
	virtual void DoDataExchange(CDataExchange* pDX);    // DDX/DDV support

	DECLARE_MESSAGE_MAP()
};


